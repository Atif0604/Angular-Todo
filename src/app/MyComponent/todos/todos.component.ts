import { Component, OnInit } from '@angular/core';
import {Todo} from '../../Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  // todos: Todo[]; // throwing error if not used constructor
  // resolution :
//   There are two ways to fix this:

// A. If you are using VSCode you need to change the TS version that the editor use.{Just go to tsconfig.json and set

// "strictPropertyInitialization": false}

// B. Just initialize the array when you declare it

// makes: any[] = [];

    // todos: Todo[] = [] ;

    // error :// ⛔️ Error: Type 'string | null' is
// not assignable to type 'string'.
// Type 'null' is not assignable to type 'string'.ts(2322)
    localItem:string| null;
    todos: Todo[] ;
  constructor() {
  this.localItem = localStorage.getItem("todos");
    if(this.localItem ==null){
    this.todos = [
      // {
      //   slno :1,
      //   title : "This is title",
      //   desc  :"Description",
      //   active : true
      // },
      // {
      //   slno :2,
      //   title : "This is title2",
      //   desc  :"Description",
      //   active : true
      // },{
      //   slno :3,
      //   title : "This is title3",
      //   desc  :"Description",
      //   active : true
      // }
    ]
   }
   else{
    this.todos =JSON.parse(this.localItem);
   }
  }

  ngOnInit(): void {
  }
  deleteTodo(todo:Todo){
    console.log(todo);
    const index =this.todos.indexOf(todo);
    this.todos.splice(index,1);
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }
  addTodo(todo:Todo){
    console.log(todo);
    this.todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }
  toggleTodo(todo:Todo){
    console.log(todo);
    const index =this.todos.indexOf(todo);
    this.todos[index].active =!this.todos[index].active;
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }
}
