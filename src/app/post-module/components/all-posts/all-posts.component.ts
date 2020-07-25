import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Post} from '../../models/Post';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit {
  posts: Post[];
  postForm: FormGroup;
  selectPost: FormControl = new FormControl('', [Validators.required]);

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.data.subscribe(value => this.posts = value.allPosts);
    this.postForm = new FormGroup({
      selectPost: this.selectPost
    });
  }

  ngOnInit(): void {
  }

  getCurrentPost(): void {
    this.router.navigate(['posts', this.selectPost.value.id]);
  }
}
