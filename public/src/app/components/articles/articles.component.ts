import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddArticleComponent } from './add-article/add-article.component';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from 'src/app/core/services/article.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { Article } from '../shared/models/article.model';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  articles: Array<Article>;
  dialogRef;

  constructor(
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private articleSerivce: ArticleService,
    public authService: AuthService
  ) { }

  ngOnInit() {
    this.articles = this.route.snapshot.data.data;
  }

  openDialog() {
    this.dialogRef = this.dialog.open(AddArticleComponent, {
      width: '350px'
    });

    this.dialogRef.afterClosed().subscribe(_result => {
      this.articleSerivce.getArticles()
        .subscribe((data) => {
          this.articles = data as Array<Article>;
        })
    });
  }
}
