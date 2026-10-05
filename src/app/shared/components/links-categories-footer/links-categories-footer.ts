import { Component, inject, OnInit } from '@angular/core';
import { ArticaleCategoriesService } from '../../../services/articale-categories-service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-links-categories-footer',
  imports: [RouterLink],
  templateUrl: './links-categories-footer.html',
  styleUrl: './links-categories-footer.css',
})
export class LinksCategoriesFooter implements OnInit {
  data = inject(ArticaleCategoriesService)
  categories!: string[]
  ngOnInit(): void {
    this.categories = this.data.categories.map(item => item.name)
  }

}
