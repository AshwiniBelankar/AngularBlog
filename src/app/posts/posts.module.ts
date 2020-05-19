import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { SharedModule } from '../shared/shared.module'

import { PostDashboardComponent } from './post-dashboard/post-dashboard.component'
import { PostDetailComponent } from './post-detail/post-detail.component'
import { PostListComponent } from './post-list/post-list.component'
import { PostService } from './post.service'
import {MatCardModule} from '@angular/material/card'
import {MatIconModule} from '@angular/material/icon'
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field'
import { MatExpansionModule } from "@angular/material/expansion"
import {MatProgressBarModule} from '@angular/material/progress-bar'; 
import { AuthService } from '../core/auth.service'
import {MatInputModule} from '@angular/material/input';



const routes: Routes = [
  { path: 'blog', component: PostListComponent },
  { path: 'blog/:id', component: PostDetailComponent },
  { path: 'dashboard', component: PostDashboardComponent },
  
]

@NgModule({
  imports: [SharedModule, FormsModule,MatInputModule ,MatFormFieldModule,MatProgressBarModule,MatExpansionModule ,MatCardModule,MatIconModule,RouterModule.forChild(routes)],
  declarations: [
    PostDashboardComponent,
    PostDetailComponent,
    PostListComponent,
    
    
  ],
  providers: [PostService, AuthService]
})
export class PostsModule {}
