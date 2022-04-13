import { NgModule } from '@angular/core';

import { PagesRoutingModule } from './pages-routing.module';

import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TestComponent } from './test/test.component';
import { CourseListComponent } from './course/course-list/course-list.component';
import { CourseViewComponent } from './course/course-view/course-view.component';


@NgModule({
  imports: [PagesRoutingModule],
  declarations: [
    WelcomeComponent,
    LoginComponent,
    RegisterComponent,
    TestComponent,
    CourseListComponent,
    CourseViewComponent
  ],
  exports: [
    WelcomeComponent
  ]
})
export class PagesModule { }
