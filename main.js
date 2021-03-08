const app = new Vue({
  el: "#app",
  data: {
    // 初期値
    newItem: '',
    todos: []
  },

  methods: {
    // ①アイテムの追加→入力欄の初期化
    addItem: function(event) {
      // 未入力=>追加しない
      if (this.newItem === '') return;
      // ---------------------------------
      // 新しい変数todoに入力されたnewItemを追加(elseに該当)
      let todo = {
        item: this.newItem,
        isDone: false
      };
      // 既に定義されているtodos配列へtodoを格納
      this.todos.push(todo);
      // 追加後テキストボックスを空白にする
      this.newItem = '';
    },

    // ②指定アイテムの消去
    deleteItem: function(index) {
      this.todos.splice(index, 1)
    }
  }
});