import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { PagesModule } from "./pages.module";
import {CourseListComponent} from "./course/course-list/course-list.component";
import {CourseViewComponent} from "./course/course-view/course-view.component";
import {TestComponent} from "./test/test.component";

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'course/list', component: CourseListComponent },
  { path: 'course/:id', component: CourseViewComponent },
  { path: 'course/test', component: TestComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
