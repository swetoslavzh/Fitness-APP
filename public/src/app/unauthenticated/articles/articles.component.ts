import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AddArticleComponent } from './lib/add-article/add-article.component';
import { Article } from '../../shared/models/article.model';
import { AuthService } from '../../shared/services/auth.service';
import { ArticleService } from './article.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit, OnDestroy {
  public articles: Article[];
  public dialogRef: MatDialogRef<AddArticleComponent>;
  private subscriptions: Subscription[];

  constructor(
    public authService: AuthService,
    public dialog: MatDialog,
    private articleSerivce: ArticleService,
    private route: ActivatedRoute
  ) {
    this.articles = this.route.snapshot.data.data;
    this.subscriptions = [];
  }

  public ngOnInit(): void {}

  public ngOnDestroy(): void {
    if (this.subscriptions.length) this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  public openDialog(): void {
    this.dialogRef = this.dialog.open(AddArticleComponent, {
      width: '350px'
    });

    this.subscriptions.push(this.dialogRef.afterClosed().subscribe(_result => {
      this.subscriptions.push(this.articleSerivce.getArticles()
        .subscribe((data) => {
          this.articles = data as Article[];
        }));
    }));
  }
  
  public isAdmin(): boolean {
    return this.authService.isAdmin();
  }
}
