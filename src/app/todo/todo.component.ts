import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  task: string
  todo: string[] = []
  tomor: string[]=[]

  k: string 


  addTask() {
    console.log(this.task)
    this.todo.push(this.task)
    this.task=""
    console.log(this.todo)
       }
  removeTask(i){
    this.todo.splice(this.todo.indexOf(i),1)
  }
  moveTask(i){
    
    this.tomor.push(i)
    this.todo.splice(this.todo.indexOf(i),1)
    console.log(this.tomor)
  }
    
  

}
