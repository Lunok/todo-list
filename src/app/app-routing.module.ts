import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SingleTodoComponent } from './single-todo/single-todo.component';
import { AddTodoComponent } from './todo/add-todo/add-todo.component';
import { TodoComponent } from './todo/todo.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { UsersComponent } from './users/users.component';

const routes : Routes = [
  { path:'', component: HomeComponent },
  { path:'todos', component: TodoComponent },
  { path:'not-found', component: NotFoundComponent },
  { path:'contact', component: ContactComponent },
  { path:'single-todo/:id', component: SingleTodoComponent },
  { path:'add-todo', component: AddTodoComponent },
  { path:'users', component: UsersComponent },
  { path:'add-user', component: AddUserComponent },
  { path:'**', pathMatch: 'full', redirectTo: 'not-found'},
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
