import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from 'src/app/core/services/article.service';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Article } from '../../shared/models/article.model';

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.scss']
})
export class ArticleEditComponent implements OnInit {

  article: Article;
  editArticleForm: FormGroup;
  articleId: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private articleService: ArticleService
  ) { }

  ngOnInit() {
    this.articleId = this.route.snapshot.params.id;
    this.articleService.getArticle(this.articleId)
      .subscribe((data) => {
        this.article = data as Article;
        this.editArticleForm = this.fb.group({
          title: [this.article.title, [Validators.required, Validators.minLength(5), Validators.maxLength(60)]],
          content: [this.article.content, [ Validators.required, Validators.minLength(10)] ],
          img: [this.article.img, [Validators.required]]
        });
      });
  }

  editArticle() {
    const { title, content, img } = this.editArticleForm.value;
    let article: Article = {
      title,
      content,
      img
    }
    this.articleService.editArticle(this.articleId, article)
      .subscribe((_data) => {
        this.router.navigate(['/articles']);
      });
  }
}
