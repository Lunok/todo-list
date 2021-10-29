import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { TodoService } from './services/todo.service';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SingleTodoComponent } from './single-todo/single-todo.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule, Routes } from '@angular/router';

export const ROUTES : Routes = [
  { path:'home', component: HomeComponent },
  { path:'todos', component: TodoComponent },
  { path:'not-found', component: NotFoundComponent },
  { path:'contact', component: ContactComponent },
  { path:'single-todo/:id', component: SingleTodoComponent },
  { path:'', component: HomeComponent},
  { path:'**', pathMatch: 'full', redirectTo: 'not-found'}
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
    ContactComponent
  ],
  // Modules
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  // Services
  providers: [],
  // Main page
  bootstrap: [AppComponent]
})
export class AppModule { }
