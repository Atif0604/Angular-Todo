import { Component, OnInit ,Input, Output, EventEmitter} from '@angular/core';
import { Todo } from 'src/app/Todo';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  // to accept the input from the component
   @Input() todo !:Todo;
   @Input() i !:number;
   @Output() todoDelete : EventEmitter<Todo> = new EventEmitter();
   @Output() todoCheckBox : EventEmitter<Todo> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  // event emmitter for deleting the todos in the fucnt
  onClick(todo:Todo){
    this.todoDelete.emit(todo);
    console.log("onclick have been called")
  }
  onCheckBoxClick(todo:Todo){
    this.todoCheckBox.emit(todo);
    console.log("toggle have been called")
  }
}
