import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from 'src/app/core/services/article.service';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-article-full',
  templateUrl: './article-full.component.html',
  styleUrls: ['./article-full.component.scss']
})
export class ArticleFullComponent implements OnInit {

  public article;

  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService,
    public authService: AuthService
  ) { }

  public ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.articleService.getArticle(id)
      .subscribe((data) => {
        this.article = data;
      });
  }
}