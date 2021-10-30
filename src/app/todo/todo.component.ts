import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { TodoService } from "../services/todo.service";

// Component = VUE
// Données = SERVICE
@Component({
  selector: 'my-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.sass']
})

export class TodoComponent implements OnInit, OnDestroy {

  today = new Date();
  todos;
  todosSub: Subscription;

  constructor(private TodoService: TodoService, private router: Router) {

  }

  ngOnInit() {
    this.today = this.TodoService.today;
    /*this.TodoService.todos
    .then((todosRecup) => {
      this.todos = todosRecup;
    })
    .catch((error) => {
      console.log(error);
    });*/

    // Subscription, each time a new value is detected, we make an update
    this.todosSub = this.TodoService.todosSubject.subscribe(
      (value: any[]) => {
        this.todos = value;
      },
      (error) => {
        console.log(error);
      },
      () => {
        console.log("completed.");
      }
    );
    this.TodoService.emitTodos();
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

  // Once the subscription is done, we destroy it
  ngOnDestroy() {
    this.todosSub.unsubscribe();
  }
}
