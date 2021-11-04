import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Todo } from "../model/todo.model";

// 3 niveaux d'injection: app.module.ts (toute l'application), app.component.ts (tous les components), specific component.
@Injectable({
  providedIn: 'root'
})

export class TodoService {
  today = new Date();
  todos: Todo[];
  todosSubject = new Subject<any[]>();

  constructor(private httpClient: HttpClient) {

    setTimeout(() => {
      this.getTodosFromServer();
    });

    /*
    this.lastUpdate = Promise.resolve(new Date()); // Instant resolve
    this.lastUpdate = Promise.reject("erreur"); // Instant reject
    */

    /*this.todos = new Promise((resolve, reject) => {
      const data = [
        {
          todoName: "Project 1",
          todoStatus: true,
          image: "http://placehold.it/150",
          isModif: false,
          description: "Lorem Ipsum is simply dummy text \
          of the printing and typesetting industry. Lorem \
          Ipsum has been the industry",
        },
        {
          todoName: "Project 2",
          todoStatus: false,
          image: "http://placehold.it/150",
          isModif: false,
          description: "Lorem Ipsum is simply dummy text \
          of the printing and typesetting industry. Lorem \
          Ipsum has been the industry",
        },
        {
          todoName: "Project 3",
          todoStatus: true,
          image: "http://placehold.it/150",
          isModif: false,
          description: "Lorem Ipsum is simply dummy text \
          of the printing and typesetting industry. Lorem \
          Ipsum has been the industry",
        },
        {
          todoName: "Project 4",
          todoStatus: false,
          image: "http://placehold.it/150",
          isModif: false,
          description: "Lorem Ipsum is simply dummy text \
          of the printing and typesetting industry. Lorem \
          Ipsum has been the industry",
        },
      ];

      if(data.length) {
        setTimeout(() => {
          this.todoSlice = data;
          resolve(data);
        }, 1500);
      } else {
        reject("Aucune donnée disponible.");
      }
    });*/
  }

  // Send the new values to the subscribers
  emitTodos() {
    this.todosSubject.next(this.todos);
  }

  /*todos = [
    {
      todoName: "Project 1",
      todoStatus: true,
      image: "http://placehold.it/150",
      isModif: false,
      description: "Lorem Ipsum is simply dummy text \
      of the printing and typesetting industry. Lorem \
      Ipsum has been the industry",
    },
    {
      todoName: "Project 2",
      todoStatus: false,
      image: "http://placehold.it/150",
      isModif: false,
      description: "Lorem Ipsum is simply dummy text \
      of the printing and typesetting industry. Lorem \
      Ipsum has been the industry",
    },
    {
      todoName: "Project 3",
      todoStatus: true,
      image: "http://placehold.it/150",
      isModif: false,
      description: "Lorem Ipsum is simply dummy text \
      of the printing and typesetting industry. Lorem \
      Ipsum has been the industry",
    },
    {
      todoName: "Project 4",
      todoStatus: false,
      image: "http://placehold.it/150",
      isModif: false,
      description: "Lorem Ipsum is simply dummy text \
      of the printing and typesetting industry. Lorem \
      Ipsum has been the industry",
    },
  ];*/

  // Each time the value change, we update the subscribers with the new value by calling emitTodos() function
  onChangeStatus(i: number) {
    this.todos[i].todoStatus = !this.todos[i].todoStatus;
    this.emitTodos();
    this.saveTodosFromServer();
  }

  // Each time the value change, we update the subscribers with the new value by calling emitTodos() function
  onChangeIsModif(i: number) {
    this.todos[i].isModif = !this.todos[i].isModif;
    this.emitTodos();
    this.saveTodosFromServer();
  }

  getTodo(index: number) {
    if(this.todos[index]) {
      return this.todos[index];
    }

    return false;
  }

  AddTodo(todo: Todo): void {
    this.todos.unshift(todo);
    this.emitTodos();
    this.saveTodosFromServer();
  }

  saveTodosFromServer(): void {
    this.httpClient
    .put("https://todo-list-app-ee4a4-default-rtdb.europe-west1.firebasedatabase.app/todos.json", this.todos)
    .subscribe(
      () => {
        console.log("Modifications enregistrées avec succès.")
      },
      (error) => {
        console.log("Une erreur est survenue lors de l'enregistrement des modifications.")
      }
    );
  }

  getTodosFromServer(): void {
    this.httpClient.get<Todo[]>("https://todo-list-app-ee4a4-default-rtdb.europe-west1.firebasedatabase.app/todos.json")
    .subscribe(
      (todos: Todo[]) => {
        this.todos = todos;
        this.emitTodos();
      },
      (error) => {
        console.log("Une erreur est survenue lors de la récupération des données.");
      },
      () => {
        console.log("Les données ont bien été actualisées.");
      }
    );
  }
}
