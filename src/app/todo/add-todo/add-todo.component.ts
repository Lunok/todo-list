import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from 'src/app/model/todo.model';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.sass']
})
export class AddTodoComponent implements OnInit {

  todo = new Todo();

  constructor(private todoService: TodoService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.todoService.AddTodo(this.todo);
    this.router.navigate(["todos"]);
  }

}
