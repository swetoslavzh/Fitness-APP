import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AddArticleComponent } from './lib/add-article/add-article.component';
import { SingleArticleComponent } from './lib/single-article/single-article.component';
import { ArticleEditComponent } from './lib/add-article/lib/article-edit/article-edit.component';
import { ArticleFullComponent } from './lib/article-full/article-full.component';
import { ArticlesComponent } from './articles.component';
import { MaterialModule } from '../../shared/material.module';

@NgModule({
  declarations: [
    AddArticleComponent,
    SingleArticleComponent,
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
    SingleArticleComponent
  ]
})
export class ArticlesModule { }