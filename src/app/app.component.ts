import { Component } from '@angular/core';
import {NzFormModule} from "ng-zorro-antd/form";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isCollapsed = false;
}
