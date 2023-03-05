import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../service/todo.service';
import { Todo } from '../../model/Todo';
import { faTrashAlt} from '@fortawesome/free-solid-svg-icons';
// import { FaIconComponent } from '@fortawesome/angular-fontawesome';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  faTrashAlt = faTrashAlt;
  todos: Todo[]=[];
  deletedTodos: Todo[]= [];

  constructor(private todoService: TodoService) {

  }

  ngOnInit(): void{
    this.todoService.getTodos().subscribe(values => {
      this.todos = values[0]
      this.deletedTodos = values[1]
    })
  }

  changeTodoStatus(todo: Todo){
    this.todoService.changeStatus(todo);
  }

  deleteTodo(todo: Todo){
    this.todoService.deleteTodo(todo);
  }

}
