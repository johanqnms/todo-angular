import { Component, OnInit } from '@angular/core';
import { Todos } from 'src/app/models/todos.model';
import { TodoServicesService } from 'src/app/services/todo-services.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.sass'],
})
export class TodoListComponent implements OnInit {
  todos: Todos[] = [];
  constructor(private _todosService: TodoServicesService) {}

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos() {
    this._todosService.getTodos().subscribe((data) => {
      this.todos = data;
    });
  }
}
