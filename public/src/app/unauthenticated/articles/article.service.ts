import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiUrls } from '../../shared/constants';
import { Article } from '../../shared/models/article.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  constructor(
    private http: HttpClient
  ) { }

  public getArticles(): Observable<any> {
    return this.http.get(apiUrls.articles);
  }

  public getArticle(id: string): Observable<any> {
    return this.http.post(apiUrls.getArticle, { id })
  }

  public postArticle(article: Article): Observable<any> {
    return this.http.post(apiUrls.articles, {
      title: article.title,
      content: article.content,
      img: article.img
    });
  }

  public editArticle(id: string, article: Article): Observable<any> {
    return this.http.put(apiUrls.editArticle, {
      id,
      title: article.title,
      content: article.content,
      img: article.img
    });
  }

  public deleteArtice(id: string): Observable<any> {
    return this.http.delete(`${apiUrls.deleteAticle}/${id}`);
  }
}
