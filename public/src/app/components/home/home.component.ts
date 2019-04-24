import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Article } from '../shared/models/article.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  imageUrlArray = [
    '../../../assets/wallpaper_1.jpg',
    '../../../assets/wallpaper_2.jpg',
    '../../../assets/wallpaper_3.jpg'
  ];
  articles: Array<Article>;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    let articles = this.route.snapshot.data.articles;
    if (articles.length > 3) articles = articles.slice(articles.length - 3, articles.length);
    this.articles = articles;
  }
}
