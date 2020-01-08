import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from 'src/app/shared/models/article.model';
import { apiUrls } from 'src/app/shared/constants';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  public getArticles() {
    return this.http.get(apiUrls.articles);
  }

  public getArticle(id: string) {
    return this.http.post(apiUrls.getArticle, { id })
  }

  public postArticle(article: Article) {
    return this.http.post(apiUrls.articles, {
      title: article.title,
      content: article.content,
      img: article.img
    });
  }

  public editArticle(id: string, article: Article) {
    return this.http.put(apiUrls.editArticle, {
      id,
      title: article.title,
      content: article.content,
      img: article.img
    });
  }

  public deleteArtice(id: string) {
    return this.http.delete(`${apiUrls.deleteAticle}/${id}`)
      .subscribe((_data) => {
      this.router.navigate(['/home']);
    });
  }
}
