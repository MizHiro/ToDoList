const app = new Vue({
  el: "#app",
  data: {
    newItem: '',
    todos: []
  },

  methods: {
    addItem: function(event) {
      // 未入力である場合
      if (this.newItem === '') return;

      let todo = {
        item: this.newItem,
        isDone: false
      };

      this.todos.push(todo);

      this.newItem = '';
    },

    // index=todos[]のkey
    deleteItem: function(index) {
      this.todos.splice(index, 1)
    }
  }
});