import { Component, Input } from '@angular/core';
import {NgForm, NgModel} from '@angular/forms';
import { Post } from './post';
import {DataService} from './data.service'; 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name1:string='John Bonachon';
  age1:number=28;
  users: string[] = ['Arcadio', 'JEsus', 'Luis', 'Gali']; 
  sayHello(){
    alert("HOLAAA"); 
  }
  deleteUser(user:string){
    for(let i=0; i<this.users.length; i++){
      if(user == this.users[i]){
        this.users.splice(i,1); 
      }
    }
  }
  addUser(newUser:any){
    this.users.push(newUser.value); 
    console.log(newUser); 
    newUser.value='';  
    newUser.focus(); 
    return false; 
  }
  name: string = 'Arcadios';
  age: number = 12;
  address: {
    street: string,
    city: string 
  }; 
  hobbies: string[];
  posts:Post[]=[]; 
  constructor(private data: DataService) { 
    this.data.getData().subscribe(data =>{
      console.log(data); 
      this.posts = data; 
    });
    this.age=28; 
    this.address={
      street:"COl juarez",
      city: "Nicolas roMERO"
    }
    this.hobbies = ["Programa", "leer","Videojuegos"]
  } 

}
