import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import {CourseListComponent} from "./course/course-list/course-list.component";
import {CourseViewComponent} from "./course/course-view/course-view.component";
import {TestComponent} from "./test/test.component";
import {UserPagesComponent} from "./user-pages/user-pages.component";
import {PagesComponent} from "./pages.component";
import {DashboardComponent} from "./dashboard/dashboard.component";

const routes: Routes = [
  { path: '', component: PagesComponent,
    children: [
      { path: '', component: WelcomeComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'course/list', component: CourseListComponent },
      { path: 'course/:id', component: CourseViewComponent },
      { path: 'course/test', component: TestComponent },
      { path: 'user/page', component: UserPagesComponent },
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
