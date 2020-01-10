import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from 'src/app/components/articles/article.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-article-full',
  templateUrl: './article-full.component.html',
  styleUrls: ['./article-full.component.scss']
})
export class ArticleFullComponent implements OnInit, OnDestroy {
  public article$;
  private subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private articleService: ArticleService,
    public authService: AuthService
  ) { }

  public ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.article$ = this.articleService.getArticle(id);
  }

  public deleteArticle( id: string ) {
    this.subscription = this.articleService.deleteArtice(id)
      .subscribe((_data) => {
      this.router.navigate(['/articles']);
    });
  }

  public ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
  }

}