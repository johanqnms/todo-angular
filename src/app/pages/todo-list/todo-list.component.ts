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
  newTodo: Todos = new Todos();
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
    if (this.title === '') {
      this.ngOnInit();
    } else {
      this.todos = this.todos.filter((res) => {
        return res.title != null
          ? res.title.toLocaleLowerCase().match(this.title.toLocaleLowerCase())
          : '';
      });
    }
  }

  key: string = 'id';
  reverse: boolean = false;
  sort(key: string){
    this.key = key;
    this.reverse = !this.reverse;
  }

  onSubmit() {
    this.newTodo.state = true;
    this.newTodo.createdAt = new Date();
    console.log(this.newTodo);

    this._todosService.addTodo(this.newTodo).subscribe({
      complete: () => {
        console.log('User Added Sucessfully');
        this.getTodos();
      },
      error: (error) => console.log(error),
    });
  }
}
