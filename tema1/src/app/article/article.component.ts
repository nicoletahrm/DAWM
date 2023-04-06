import { Component, OnInit } from '@angular/core';
import { Article } from '../interfaces/article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent {
  articles: Article[] = [
    {
      id: 1,
      title: 'Article title',
      description:
        'Plan your trip with us and travel around the world with the most affordable packages!',
      topic: 'TRAVEL',
    },
    {
      id: 2,
      title: 'Article title',
      description:
        'Plan your trip with us and travel around the world with the most affordable packages!',
      topic: 'TRAVEL ARANGEMENTS',
    },
    {
      id: 3,
      title: 'Article title',
      description:
        'Plan your trip with us and travel around the world with the most affordable packages!',
      topic: 'OUT PROFESSIONAL GUIDE',
    },
    {
      id: 4,
      title: 'Article title',
      description:
        'Plan your trip with us and travel around the world with the most affordable packages!',
      topic: 'ACTIVITIES',
    },
  ];
}
