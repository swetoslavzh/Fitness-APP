import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdministrationComponent } from './authenticated/administration/administration.component';
import { HomeComponent } from './unauthenticated/home/home.component';
import { LoginComponent } from './unauthenticated/login/login.component';
import { RegisterComponent } from './unauthenticated/register/register.component';
import { CalorieComponent } from './unauthenticated/calculate/calorie/calorie.component';
import { OneRepMaxComponent } from './unauthenticated/calculate/one-rep-max/one-rep-max.component';
import { ArticlesComponent } from './unauthenticated/articles/articles.component';
import { AddArticleComponent } from './unauthenticated/articles/lib/add-article/add-article.component';
import { ArticleFullComponent } from './unauthenticated/articles/lib/article-full/article-full.component';
import { ArticleEditComponent } from './unauthenticated/articles/lib/add-article/lib/article-edit/article-edit.component';
import { AdminGuard } from './shared/guards/admin.guard';
import { AuthGuard } from './shared/guards/auth.guard';
import { ArticleResolver } from './shared/resolvers/article.resolver';

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
    loadChildren: './authenticated/training-log/training-log.module#TrainingLogModule',
    canActivate: [AuthGuard]
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
    component: AddArticleComponent,
    canActivate: [AdminGuard]
  },
  {
    path: 'articles/:id',
    component: ArticleFullComponent
  },
  {
    path: 'articles/edit/:id',
    component: ArticleEditComponent,
    canActivate: [AdminGuard]
  },
  {
    path: 'administration',
    component: AdministrationComponent,
    canActivate: [AdminGuard]
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
