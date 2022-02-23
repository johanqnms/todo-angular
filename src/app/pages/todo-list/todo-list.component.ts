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
  title: any;
  p: number = 1;
  constructor(private _todosService: TodoServicesService) {}

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos() {
    this._todosService.getTodos().subscribe((data) => {
      this.todos = data;
    });
  }

  search() {
    if(this.title === "") {
      this.ngOnInit();
    }
    else{      
      this.todos = this.todos.filter(res => {
        return (res.title != null) ? res.title.toLocaleLowerCase().match(this.title.toLocaleLowerCase()) : "" 
      })
    }
  }
}
