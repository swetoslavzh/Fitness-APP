import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/core/material.module';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AddArticleComponent } from './add-article/add-article.component';
import { ArticleComponent } from './article/article.component';
import { ArticleEditComponent } from './article-edit/article-edit.component';
import { ArticleFullComponent } from './article-full/article-full.component';
import { ArticlesComponent } from './articles.component';

@NgModule({
  declarations: [
    AddArticleComponent,
    ArticleComponent,
    ArticleEditComponent,
    ArticleFullComponent,
    ArticlesComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    ArticleComponent
  ]
})
export class ArticlesModule { }