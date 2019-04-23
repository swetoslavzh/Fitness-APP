import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/core/material.module';
import { CommonModule } from '@angular/common';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleComponent } from './articles/article/article.component';
import { FooterComponent } from './footer/footer.component';
import { AddArticleComponent } from './articles/add-article/add-article.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ArticleFullComponent } from './articles/article-full/article-full.component';
import { ArticleEditComponent } from './articles/article-edit/article-edit.component';

@NgModule({
  declarations: [
    ArticlesComponent,
    ArticleComponent,
    AddArticleComponent,
    FooterComponent,
    ArticleFullComponent,
    ArticleEditComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    ArticlesComponent,
    ArticleComponent,
    FooterComponent,
    AddArticleComponent
  ]
})
export class SharedModule { }
