import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'; 
import { Post } from './post';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) {
    console.log('El servicio está trabajando'); 
  }
  getData(){
    return this.httpClient.get<Post[]>('https://jsonplaceholder.typicode.com/posts'); 
  }
}
