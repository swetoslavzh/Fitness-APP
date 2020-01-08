import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ArticleService } from 'src/app/core/services/article.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Article } from 'src/app/shared/models/article.model';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.scss']
})
export class AddArticleComponent implements OnInit {

  public articleForm: FormGroup;
  
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<AddArticleComponent>,
    private fb: FormBuilder,
    private articleService: ArticleService
  ) { }
  
  public ngOnInit() {
    this.articleForm = this.fb.group({
      title: [null, [ Validators.required, 
                      Validators.minLength(5), 
                      Validators.maxLength(50)] ],
      content: [null, [ Validators.required, 
                        Validators.minLength(10)] ],
      img: [null, [Validators.required]]
    });
  }

  public addArticle() {
    const article: Article = this.articleForm.value;
    this.articleService.postArticle(article)
      .subscribe((_data) => {
        this.dialogRef.close();
      });
  }
}
