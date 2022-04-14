import { NgModule } from '@angular/core';

import { PagesRoutingModule } from './pages-routing.module';

import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TestComponent } from './test/test.component';
import { CourseListComponent } from './course/course-list/course-list.component';
import { CourseViewComponent } from './course/course-view/course-view.component';
import {NzFormModule} from "ng-zorro-antd/form";
import {NzInputModule} from "ng-zorro-antd/input";
import {ReactiveFormsModule} from "@angular/forms";
import {NzCheckboxModule} from "ng-zorro-antd/checkbox";
import {NzButtonModule} from "ng-zorro-antd/button";
import { UserPagesComponent } from './user-pages/user-pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {NzToolTipModule} from "ng-zorro-antd/tooltip";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzSelectModule} from "ng-zorro-antd/select";
import {NzNotificationService} from "ng-zorro-antd/notification";
import { PagesComponent } from './pages.component';
import {NzDropDownModule} from "ng-zorro-antd/dropdown";
import {NzLayoutModule} from "ng-zorro-antd/layout";
import {NzStepsModule} from "ng-zorro-antd/steps";
import {NzProgressModule} from "ng-zorro-antd/progress";
import {NzCardModule} from "ng-zorro-antd/card";
import {CommonModule} from "@angular/common";
import {NzAvatarModule} from "ng-zorro-antd/avatar";


@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    NzFormModule,
    NzInputModule,
    ReactiveFormsModule,
    NzCheckboxModule,
    NzButtonModule,
    NzToolTipModule,
    NzIconModule,
    NzSelectModule,
    NzDropDownModule,
    NzLayoutModule,
    NzStepsModule,
    NzProgressModule,
    NzCardModule,
    NzAvatarModule
  ],
  providers: [
    NzNotificationService
  ],
  declarations: [
    WelcomeComponent,
    LoginComponent,
    RegisterComponent,
    TestComponent,
    CourseListComponent,
    CourseViewComponent,
    UserPagesComponent,
    DashboardComponent,
    PagesComponent
  ],
  exports: [
    PagesComponent
  ]
})
export class PagesModule { }
