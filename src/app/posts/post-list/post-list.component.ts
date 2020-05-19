import { Component, OnInit, NgModule } from '@angular/core'
import { Observable } from 'rxjs/Observable'

import { PostService } from '../post.service'
import { Post } from '../post'
import { AuthService } from '../../core/auth.service'
import { HttpModule } from '@angular/http';
import { HttpClientModule } from "@angular/common/http"
import { BrowserModule } from '@angular/platform-browser'
import { AngularFireModule } from "angularfire2"
import { AngularFirestore, AngularFirestoreModule } from "angularfire2/firestore";
import { Subject } from 'rxjs/Subject';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})

@NgModule({
  imports: [ BrowserModule, HttpModule, AngularFirestoreModule],
  
})
export class PostListComponent implements OnInit {
 
  posts: Observable<Post[]>
  
  constructor(private postService: PostService,private afs: AngularFirestore, public auth: AuthService) {}

  ngOnInit() {
    this.posts = this.postService.getPosts()
    console.log(this)
  }
  
  
  delete(id: string) {
    this.postService.delete(id)
  }

}
