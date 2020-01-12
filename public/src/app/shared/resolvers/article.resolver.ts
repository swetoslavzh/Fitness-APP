import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { ArticleService } from '../../unauthenticated/articles/article.service';

@Injectable({
  providedIn: 'root'
})
export class ArticleResolver implements Resolve<any> {

  constructor(private articleService: ArticleService) {}

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.articleService.getArticles();
  }
}