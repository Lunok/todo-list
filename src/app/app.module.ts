import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoService } from './services/todo.service';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SingleTodoComponent } from './single-todo/single-todo.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule, Routes } from '@angular/router';
import { AddTodoComponent } from './todo/add-todo/add-todo.component';
import { UsersComponent } from './users/users.component';
import { AddUserComponent } from './users/add-user/add-user.component';

export const ROUTES : Routes = [
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
  // Components
  declarations: [
    AppComponent,
    TodoComponent,
    HeaderComponent,
    HomeComponent,
    NotFoundComponent,
    SingleTodoComponent,
    ContactComponent,
    AddTodoComponent,
    UsersComponent,
    AddUserComponent
  ],
  // Modules
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES),
  ],
  // Services
  providers: [],
  // Main page
  bootstrap: [AppComponent]
})
export class AppModule { }
