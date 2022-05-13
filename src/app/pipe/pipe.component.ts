import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent {


  public prom = new Promise((resolve, reject) => {
    setTimeout(()=> {
      resolve("Hello there")
    }, 3000)
  })

  public me:{name:string,networth:number, dob:Date, rating:number, covered:number}={
    name:'John Doe',
    networth: 10000000,
    dob: new Date(),
    rating:4.9583782,
    covered: 0.3
  }

  public searchstring=''

  public trainees:{name:string,age:number}[]= [
    {
      name:'Johnstone Makau',
      age:20,
    },
    {
      name: 'Jackson Ndolo',
      age: 15,
    },
    {
      name: 'Sinket',
      age: 25,
    },
    {
      name: 'Joseph Kamau',
      age: 22,
    },
    {
      name: 'Martin Nzuvi',
      age: 25,
    }
  ]

  constructor() {}
  addTrainee(){
    this.trainees.push({name:"Jane Doe", age:27})
  }
}
