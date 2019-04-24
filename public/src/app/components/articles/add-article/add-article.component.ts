import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ArticleService } from 'src/app/core/services/article.service';
import { Article } from '../../shared/models/article.model';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.scss']
})
export class AddArticleComponent implements OnInit {

  articleForm: FormGroup;
  
  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AddArticleComponent>,
    private articleService: ArticleService,
    @Inject(MAT_DIALOG_DATA) public data
  ) { }
  
  ngOnInit() {
    this.articleForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
      content: ['', [ Validators.required, Validators.minLength(10)] ],
      img: ['', [Validators.required]]
    });
  }

  addArticle() {
    const { title, content, img } = this.articleForm.value;
    let article: Article = {
      title,
      content,
      img
    }
    this.articleService.postArticle(article)
      .subscribe((_data) => {
        this.dialogRef.close();
      });
  }
}
