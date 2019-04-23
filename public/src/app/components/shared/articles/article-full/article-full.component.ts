import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from 'src/app/core/services/article.service';
import { Article } from '../../models/article.model';

@Component({
  selector: 'app-article-full',
  templateUrl: './article-full.component.html',
  styleUrls: ['./article-full.component.scss']
})
export class ArticleFullComponent implements OnInit {

  article: Article;

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.params.id;
    this.articleService.getArticle(id)
      .subscribe((data) => {
        this.article = data as Article;
      });
  }
}