import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curd',
  templateUrl: './curd.component.html',
  styleUrls: ['./curd.component.css']
})
export class CurdComponent implements OnInit {
  data=[
    {name:"Anju",Email:"abc@gmail.com"},
    {name:"Ankit",Email:"xyz@gmail.com"},
    {name:"Ajay",Email:"wxy@gmail.com"}
  ];
 

  constructor() { }

  ngOnInit(): void {
  }
    model:any={};
    model1:any={};
    addData(){
      this.data.push(this.model);
      this.model="";
      console.log(this.data,"data")
      console.log(this.model,"model")
     
    }
    deleteData(i){
      this.data.splice(i,1)
  
  }
  myVal
  editData(k)  {
    this.model1.name=this.data[k].name;
    this.model1.Email=this.data[k].Email;
    this.myVal=k;
    console.log(this.model1)
  }
  updateData() {  
    let k = this.myVal;  
    for (let i = 0; i < this.data.length; i++){
     if(i==k){
         this.data[i]=this.model1;
     }
     console.log(this.data)
    
  
    }
      }  
 }

