import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { AllPostsComponent } from './components/all-posts/all-posts.component';
import {PostResolveService} from './services/post-resolve.service';
import {HttpClientModule} from '@angular/common/http';
import { PostComponent } from './components/post/post.component';
import {ReactiveFormsModule} from '@angular/forms';

const routePost = {
  path: '',
  component: AllPostsComponent,
  resolve: {allPosts: PostResolveService},
  children: [
    {path: ':id', component: PostComponent}
  ]
};

@NgModule({
  declarations: [AllPostsComponent, PostComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      routePost
    ]),
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class PostModule { }
