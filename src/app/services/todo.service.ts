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

  constructor() {

    setTimeout(() => {

      this.todos = [
        {
          todoName: "Project 1",
          todoStatus: true,
          urlCover: "http://placeimg.com/250/250/tech",
          isModif: false,
          todoDescription: "Lorem Ipsum is simply dummy text \
          of the printing and typesetting industry. Lorem \
          Ipsum has been the industry",
        },
        {
          todoName: "Project 2",
          todoStatus: false,
          urlCover: "http://placeimg.com/250/250/animal",
          isModif: false,
          todoDescription: "Lorem Ipsum is simply dummy text \
          of the printing and typesetting industry. Lorem \
          Ipsum has been the industry",
        },
        {
          todoName: "Project 3",
          todoStatus: true,
          urlCover: "http://placeimg.com/250/250/nature",
          isModif: false,
          todoDescription: "Lorem Ipsum is simply dummy text \
          of the printing and typesetting industry. Lorem \
          Ipsum has been the industry",
        },
        {
          todoName: "Project 4",
          todoStatus: false,
          urlCover: "http://placeimg.com/250/250/architecture",
          isModif: false,
          todoDescription: "Lorem Ipsum is simply dummy text \
          of the printing and typesetting industry. Lorem \
          Ipsum has been the industry",
        },
      ];

      // Send the new values to the subscribers
      this.emitTodos();
    }, 1000);
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
  }

  // Each time the value change, we update the subscribers with the new value by calling emitTodos() function
  onChangeIsModif(i: number) {
    this.todos[i].isModif = !this.todos[i].isModif;
    this.emitTodos();
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
  }
}
