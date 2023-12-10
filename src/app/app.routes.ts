import { Routes } from '@angular/router';
import { HomePageComponent } from './component/home-page/home-page.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { DeferrableViewsComponent } from './component/deferrable-views/deferrable-views.component';

export const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'deferrable-views', component: DeferrableViewsComponent },

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
