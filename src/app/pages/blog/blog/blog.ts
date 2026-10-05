import { Component } from '@angular/core';
import { BlogOne } from '../sections/blog-one/blog-one';
import { BlogTwo } from '../sections/blog-two/blog-two';

@Component({
  selector: 'app-blog',
  imports: [BlogOne, BlogTwo],
  templateUrl: './blog.html',
  styleUrl: './blog.css',
})
export class Blog {}
