import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { AddArticleComponent } from './add-article/add-article.component';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from 'src/app/core/services/article.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { Article } from 'src/app/shared/models/article.model';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  public articles: Article[];
  public dialogRef: MatDialogRef<AddArticleComponent>;

  constructor(
    public authService: AuthService,
    public dialog: MatDialog,
    private articleSerivce: ArticleService,
    private route: ActivatedRoute
  ) { }

  public ngOnInit(): void {
    this.articles = this.route.snapshot.data.data;
  }

  public openDialog(): void {
    this.dialogRef = this.dialog.open(AddArticleComponent, {
      width: '350px'
    });

    this.dialogRef.afterClosed().subscribe(_result => {
      this.articleSerivce.getArticles()
        .subscribe((data) => {
          this.articles = data as Article[];
        })
    });
  }
  
  public isAdmin(): boolean {
    return this.authService.isAdmin();
  }
}
