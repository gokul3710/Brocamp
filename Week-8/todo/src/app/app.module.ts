import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { HeaderComponent } from './layout/header/header.component';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome/fontawesome.module';
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoFormComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
