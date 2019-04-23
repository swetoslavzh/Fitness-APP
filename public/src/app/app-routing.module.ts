import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './components/auth/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/auth/login/login.component';
import { CalorieComponent } from './components/calculate/calorie/calorie.component';
import { OneRepMaxComponent } from './components/calculate/one-rep-max/one-rep-max.component';
import { ExerciseNamesResolver } from './core/resolvers/exercise-names.resolver';
import { ArticlesComponent } from './components/shared/articles/articles.component';
import { AddArticleComponent } from './components/shared/articles/add-article/add-article.component';
import { ArticleResolver } from './core/resolvers/article.resolver';
import { ArticleFullComponent } from './components/shared/articles/article-full/article-full.component';
import { ArticleEditComponent } from './components/shared/articles/article-edit/article-edit.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  },
  {
    path: 'home',
    component: HomeComponent,
    resolve: { articles: ArticleResolver }
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'training-log',
    loadChildren: './components/training-log/training-log.module#TrainingLogModule'
  },
  {
    path: 'calculate/calories',
    component: CalorieComponent
  },
  {
    path: 'calculate/one-rep-max',
    component: OneRepMaxComponent
  },
  {
    path: 'articles',
    component: ArticlesComponent,
    resolve: { data: ArticleResolver }
  },
  {
    path: 'articles/addArticle',
    component: AddArticleComponent
  },
  {
    path: 'articles/:id',
    component: ArticleFullComponent
  },
  {
    path: 'articles/edit/:id',
    component: ArticleEditComponent
  }
  // {
  //   path: '**',
  //   redirectTo: /*NOT FOUnd comp */
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
