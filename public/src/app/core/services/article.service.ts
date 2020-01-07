import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from 'src/app/components/shared/models/article.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private url: string = "http://localhost:5000/articles";

  constructor(private http: HttpClient) { }

  public getArticles() {
    return this.http.get(this.url);
  }

  public getArticle(id: string) {
    return this.http.post(`${this.url}/getArticle`, { id })
  }

  public postArticle(article: Article) {
    return this.http.post(this.url, {
      title: article.title,
      content: article.content,
      img: article.img
    });
  }

  public editArticle(id: string, article: Article) {
    return this.http.put(`${this.url}/editArticle`, {
      id,
      title: article.title,
      content: article.content,
      img: article.img
    });
  }
}
