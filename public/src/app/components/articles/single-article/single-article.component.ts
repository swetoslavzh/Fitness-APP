import { Component, Input } from '@angular/core';
import { Article } from '../../shared/models/article.model';

@Component({
  selector: 'single-article',
  templateUrl: './single-article.component.html',
  styleUrls: ['./single-article.component.scss']
})
export class SingleArticleComponent {

  @Input('article') public article: Article;
  @Input('contentLength') public contentLength: number;

  constructor() { }
}
