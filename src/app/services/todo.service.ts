import { Injectable } from "@angular/core";

// 3 niveaux d'injection: app.module.ts (toute l'application), app.component.ts (tous les components), specific component.

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todoOne: string = "Projet 1";
  todoTwo: string = "Projet 2";
  todoThree: string = "Projet 3";
  todoFour: string = "Projet 4";
  today = new Date();
  todos;
  todoSlice;
  lastUpdate;

  constructor() {

    /*
    this.lastUpdate = Promise.resolve(new Date()); // Instant resolve
    this.lastUpdate = Promise.reject("erreur"); // Instant reject
    */

    this.todos = new Promise((resolve, reject) => {
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
    });
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

  onChangeStatus(i: number) {
    this.todoSlice[i].todoStatus = !this.todoSlice[i].todoStatus;
  }

  onChangeIsModif(i: number) {
    this.todoSlice[i].isModif = !this.todoSlice[i].isModif;
  }

  getTodo(index: number) {
    if(this.todoSlice[index]) {
      return this.todoSlice[index];
    }

    return false;
  }
}
