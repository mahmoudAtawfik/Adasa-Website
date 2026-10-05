import { Component, inject } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { DataArticale } from '../../../../services/data-articale';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Alert } from '../../../../shared/components/alert/alert';
import { Tags } from '../../../../shared/components/tags/tags';
import { ShareArticle } from '../../../../shared/components/share-article/share-article';
import { Writer } from '../../../../shared/components/writer/writer';
import { DontMiss } from '../../../../shared/components/dont-miss/dont-miss';
import { DataArticaleInterface } from '../../../../models/data-articale-interface';
import { DetailsSecThree } from '../details-sec-three/details-sec-three';

@Component({
  selector: 'app-blog-details',
  imports: [RouterLink, Alert, Tags, ShareArticle, Writer, DontMiss, DetailsSecThree],
  templateUrl: './blog-details.html',
  styleUrl: './blog-details.css',
})
export class BlogDetails {
  data = inject(DataArticale);
  route = inject(ActivatedRoute);
  article!: DataArticaleInterface;
randomArticles: DataArticaleInterface[] = [];
   constructor(private viewportScroller: ViewportScroller) {
    this.viewportScroller.setOffset([0, 100]);
  }
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const slug = params.get('slug');

      this.article = this.data.data.find(
        item => item.slug === slug
      )!;

      // console.log(this.article);
    this.randomArticles =[...this.data.data].sort(()=>Math.random()-0.5).slice(0,3)
    });
  }
}
