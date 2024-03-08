import { NgOptimizedImage } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { posts } from '../../../posts.model';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-post-details',
  standalone: true,
  imports: [NgOptimizedImage, HeaderComponent],
  templateUrl: './post-details.component.html',
  styles: ``
})
export class PostDetailsComponent implements OnInit {
  posts = posts;
  router = inject(ActivatedRoute);
  postId: any;
  postDetails: any;
  isAuthor: boolean = false;

  ngOnInit(): void {
    this.router.paramMap.subscribe((param) => {
      this.postId = param.get('id');
      of(this.posts.find((post) => post.id === +this.postId)).subscribe(value => {
        this.postDetails = value
      })
    });
  }
}
