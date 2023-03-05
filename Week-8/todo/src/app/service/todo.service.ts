import { Injectable } from '@angular/core';
import { of, single }  from 'rxjs'
import { Todo } from '../model/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: Todo[];
  deletedTodos: Todo[] = [];
  
  constructor() { 
    this.todos = [
      {
        id: "1",
        title: "Learn TS",
        isCompleted: true,
        date: new Date()
      },
      {
        id: "2",
        title: "Learn React",
        isCompleted: false,
        date: new Date()
      },
      {
        id: "3",
        title: "Learn Angular",
        isCompleted: true,
        date: new Date()
      }
    ]
  }

  getTodos(){
    return of([this.todos,this.deletedTodos])
  }

  addtodo(todo: Todo){
    this.todos.push(todo)
  }

  changeStatus(todo: Todo){
    this.todos.map( singleTodo => {
      if(singleTodo.id == todo.id){
        singleTodo.isCompleted = !todo.isCompleted
      }
    })
  }

  deleteTodo(todo: Todo){
    const index = this.todos.findIndex(
      (currentObj) => currentObj.id === todo.id
    );

    this.todos.splice(index,1)
    console.log(this.todos);
    this.deletedTodos.push(todo)
  }
  
}
