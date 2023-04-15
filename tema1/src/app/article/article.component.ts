import { Component, OnInit } from '@angular/core';
import { Article } from '../interfaces/article';
import { PlaceService } from '../services/place.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent {
  articles: Article[] = [];
  errorMessage: string = '';

  constructor(private placeService: PlaceService) {}

  ngOnInit(): void {
    this.placeService.getArticles().subscribe({
      next: (articles) => {
        this.articles = articles;
        //this.filteredProducts = this.products;
      },
      error: (err) => (this.errorMessage = err),
    });
  }
}
