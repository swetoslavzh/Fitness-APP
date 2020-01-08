import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/shared/models/article.model';
import { homeImagesUrls } from 'src/app/shared/constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public imageUrlArray: string[]; 
  public articles: Article[];

  constructor(private route: ActivatedRoute) {
    this.imageUrlArray = homeImagesUrls;
  }

  public ngOnInit(): void {
    let articles = this.route.snapshot.data.articles;
    if (articles.length > 3) articles = articles.slice(articles.length - 3, articles.length);
    this.articles = articles;
  }
}
