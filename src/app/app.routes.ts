import { Routes } from '@angular/router';
import { HomePageComponent } from './component/home-page/home-page.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { DeferrableViewsComponent } from './component/deferrable-views/deferrable-views.component';
import { BuiltInControlFlowComponent } from './component/built-in-control-flow/built-in-control-flow.component';
import { FreshNewLookComponent } from './component/fresh-new-look/fresh-new-look.component';
import { SignalsComponent } from './component/signals/signals.component';
import { Ng16Component } from './component/ng-16/ng-16.component';
import { TodoComponent } from './component/todo/todo.component';
import { CardPComponent } from './component/card-p/card-p.component';
import { InterviewQComponent } from './component/interview-q/interview-q.component';
import { Es6Component } from './component/es6/es6.component';
import { RxJsComponent } from './component/rx-js/rx-js.component';
import { C1Component } from './component/c-1/c-1.component';
import { TColorComponent } from './component/t-color/t-color.component';
import { DComponent } from './component/d/d.component';

export const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'deferrable-views', component: DeferrableViewsComponent },
  { path: 'built-in-control-flow', component: BuiltInControlFlowComponent },
  { path: 'fresh-new-look', component: FreshNewLookComponent },
  { path: 'ng16', component: Ng16Component },
  { path: 'interview', component: InterviewQComponent },
  { path: 'todo', component: TodoComponent },
  { path: 'card-p', component: CardPComponent },
  { path: 'es6', component: Es6Component },
  { path: 'rxjs', component: RxJsComponent },
  { path: 'signals', component: SignalsComponent },

  { path: 'test', component: DComponent },
  { path: 'test-1', component: C1Component },
  { path: 'test-2', component: TColorComponent },

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
