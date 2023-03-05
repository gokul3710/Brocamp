import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/model/Todo';
import {v4}   from "uuid"
import { TodoService } from 'src/app/service/todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  title: string = ""
  
  constructor(private todoService: TodoService) {}

  ngOnInit(): void {}

  handleAdd(){
    if(this.title == ""){
      return "The string can't be empty"
    }

    const  newTodo: Todo = {
      id: v4(),
      title: this.title,
      isCompleted: false,
      date: new Date()
    };

    this.todoService.addtodo(newTodo);
    this.title = ""
    return "Todo Added"
  }

}


