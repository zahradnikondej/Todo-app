import { Component } from '@angular/core';
import { Todo } from '../../class';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
})
export class TodoComponent {
  todos: Todo[] = [];

  inputItem: string = '';

  ngOnInit(): void {
    const saveData = localStorage.getItem('todos');
    if (saveData) {
      this.todos = JSON.parse(saveData);
    }
  }

  saveData() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  addTodo() {
    if (this.inputItem.trim() === '') return;
    this.todos.push({
      content: this.inputItem,
      completed: false,
    });

    this.inputItem = '';

    this.saveData();
  }

  deleteTodo(id: number) {
    this.todos.splice(id, 1);
    this.saveData();
  }

  toggleDone(todo: Todo) {
    todo.completed = !todo.completed;
  }
}
