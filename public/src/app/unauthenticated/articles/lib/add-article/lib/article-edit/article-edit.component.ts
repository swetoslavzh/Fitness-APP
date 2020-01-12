import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Article } from '../../../../../../shared/models/article.model';
import { ArticleService } from '../../../../article.service';

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.scss']
})
export class ArticleEditComponent implements OnInit, OnDestroy {
  public article: Article;
  public editArticleForm: FormGroup;
  public articleId: string;
  private subscriptions: Subscription[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private articleService: ArticleService
  ) {
    this.articleId = this.route.snapshot.params.id;
    this.subscriptions = [];
  }

  public ngOnInit(): void {
    this.subscriptions.push( this.articleService.getArticle(this.articleId)
      .subscribe((data: Article) => {
        this.article = data;
        this.editArticleForm = this.fb.group({
          title: [ this.article.title, 
                 [ Validators.required, 
                   Validators.minLength(5), 
                   Validators.maxLength(60) ]],
          content: [ this.article.content, [ Validators.required, 
                                            Validators.minLength(10)] ],
          img: [ this.article.img, [Validators.required] ]
        });
      }) );
  }

  public editArticle(): void {
    const article: Article = this.editArticleForm.value;
    this.subscriptions.push(this.articleService.editArticle(this.articleId, article)
      .subscribe((_data) => {
        this.router.navigate(['/articles']);
      }));
  }

  public ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
