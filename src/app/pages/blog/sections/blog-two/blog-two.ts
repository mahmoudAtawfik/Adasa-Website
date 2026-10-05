import { Component, inject } from '@angular/core';
import { DataArticale } from '../../../../services/data-articale';
import { RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-blog-two',
  imports: [RouterLink, NgClass],
  templateUrl: './blog-two.html',
  styleUrl: './blog-two.css',
})
export class BlogTwo {

  searchTerm = '';

  articalCard = inject(DataArticale);

  categories = [
    ...new Set(
      this.articalCard.data.map(article => article.span_desc)
    )
  ];

  currentPage: number = 1;
  itemsPerPage: number = 6;

  mahmoud: string = 'جميع المقالات';
  selectedCategory = 'all';

  get articlesCount(): number {
    return this.filteredData.length;
  }

  get totalPages(): number {
    return Math.ceil(
      this.filteredData.length / this.itemsPerPage
    );
  }

  smozescroll() {
    setTimeout(() => {
      document.getElementById('articles-section')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  }

  goToPage(page: number) {
    if (page < 1 || page > this.totalPages) {
      return;
    }

    this.currentPage = page;
    this.smozescroll();
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.smozescroll();
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.smozescroll();
    }
  }

  changemahmoud(e: PointerEvent) {
    const button = e.currentTarget as HTMLButtonElement;
    const category = button.textContent?.trim() ?? '';

    this.mahmoud = category;

    this.selectedCategory =
      category === 'جميع المقالات'
        ? 'all'
        : category;

    this.currentPage = 1;
  }

  searchArticles(e: Event) {
    const input = e.target as HTMLInputElement;

    this.searchTerm = input.value;
    this.currentPage = 1;
  }

  get filteredData() {
    let data = this.articalCard.data;

    if (this.mahmoud !== 'جميع المقالات') {
      data = data.filter(
        article => article.span_desc === this.mahmoud
      );
    }

    if (this.searchTerm.trim()) {
      const search = this.searchTerm.trim().toLowerCase();

      data = data.filter(article =>
        article.title.toLowerCase().includes(search) ||
        article.description.toLowerCase().includes(search)
      );
    }

    return data;
  }

  get filteredArticles() {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;

    return this.filteredData.slice(start, end);
  }
}
