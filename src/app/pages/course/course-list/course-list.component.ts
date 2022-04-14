import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {
  courses = [1, 2, 3];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  toView(index: number) {
    this.router.navigate(['api/project/course', index]).then(() => {})
  }
}
