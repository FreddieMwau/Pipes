import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {

  constructor() {
    // ternary operator
    this.isLegal =  Math.ceil(Math.random()*50)>18? true:false;
   }
  students: { name: string, age: number }[] = [
    {
      name: 'Tom',
      age: 14
    },
    {
      name: 'Jerry',
      age: 10
    },
    {
      name: 'Walker',
      age: 140
    },
    {
      name: 'Mark',
      age: 12
    },
    {
      name: 'Thomas',
      age: 19
    },
  ]
  name :string=''
  isAdded:boolean = false
  isLegal:boolean = false
  legal:string='Fredrick Mwau'
  theme:boolean=false

  gender:string='Female'

  addName(name:string){
    this.name=name
    this.isAdded = true
    setTimeout(()=>{
      this.isAdded=false
    },3000)
  }

  getColor(){
    return this.isLegal?'green':'red'
  }

  changeTheme(){
    this.theme=!this.theme
  }
}
