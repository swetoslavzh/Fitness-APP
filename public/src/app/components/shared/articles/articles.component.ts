import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddArticleComponent } from './add-article/add-article.component';
import { Article } from '../models/article.model';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from 'src/app/core/services/article.service';

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
    private articleSerivce: ArticleService
  ) { }

  ngOnInit() {
    this.articles = this.route.snapshot.data.data;
    
  }

  openDialog() {
    this.dialogRef = this.dialog.open(AddArticleComponent, {
      width: '350px'
    });

    this.dialogRef.afterClosed().subscribe(result => {
      this.articleSerivce.getArticles()
        .subscribe((data) => {
          this.articles = data['data'];
        })
    });
  }
}
