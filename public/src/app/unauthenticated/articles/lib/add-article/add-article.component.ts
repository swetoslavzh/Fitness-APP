import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Subscription } from 'rxjs';
import { ArticleService } from '../../article.service';
import { Article } from '../../../../shared/models/article.model';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.scss']
})
export class AddArticleComponent implements OnInit, OnDestroy {
  public articleForm: FormGroup;
  private subscription: Subscription;
  
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<AddArticleComponent>,
    private fb: FormBuilder,
    private articleService: ArticleService
  ) { }
  
  public ngOnInit(): void {
    this.articleForm = this.fb.group({
      title: [null, [ Validators.required, 
                      Validators.minLength(5), 
                      Validators.maxLength(50)] ],
      content: [null, [ Validators.required, 
                        Validators.minLength(10)] ],
      img: [null, [Validators.required]]
    });
  }

  public addArticle(): void {
    const article: Article = this.articleForm.value;
    this.subscription = this.articleService.postArticle(article)
      .subscribe((_data) => {
        this.dialogRef.close();
      });
  }

  public ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
  }
}
