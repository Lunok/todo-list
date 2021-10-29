import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { TodoService } from "../services/todo.service";

// Component = VUE
// Données = SERVICE
@Component({
  selector: 'my-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.sass']
})

export class TodoComponent implements OnInit {

  today = new Date();
  todos;

  constructor(private TodoService: TodoService, private router: Router) {

  }

  ngOnInit() {
    this.today = this.TodoService.today;
    this.TodoService.todos
    .then((todosRecup) => {
      this.todos = todosRecup;
    })
    .catch((error) => {
      console.log(error);
    });
  }

  onChangeStatus(i: number) {
    this.TodoService.onChangeStatus(i);
  }

  onChangeIsModif(i: number) {
    this.TodoService.onChangeIsModif(i);
  }

  onView(id: number) {
    this.router.navigate(["single-todo", id]);
  }
}
