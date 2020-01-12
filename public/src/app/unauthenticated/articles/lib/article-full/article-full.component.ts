import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { ArticleService } from '../../article.service';
import { AuthService } from '../../../../shared/services/auth.service';
import { Article } from '../../../../shared/models/article.model';

@Component({
  selector: 'app-article-full',
  templateUrl: './article-full.component.html',
  styleUrls: ['./article-full.component.scss']
})
export class ArticleFullComponent implements OnInit, OnDestroy {
  public article$: Observable<Article>;
  private subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private articleService: ArticleService,
    public authService: AuthService
  ) { }

  public ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    this.article$ = this.articleService.getArticle(id);
  }

  public deleteArticle( id: string ): void {
    this.subscription = this.articleService.deleteArtice(id)
      .subscribe((_data) => {
      this.router.navigate(['/articles']);
    });
  }

  public ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
  }

}