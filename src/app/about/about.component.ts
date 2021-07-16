import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Post } from '../post'; 
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  posts: Post[] =[]; 
  constructor(private data:DataService) {
    this.data.getData().subscribe(data=>{
      this.posts = data;
    }); 
  }

  ngOnInit(): void {
  }

}
