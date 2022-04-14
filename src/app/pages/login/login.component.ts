import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { NzGridModule } from 'ng-zorro-antd/grid';
import {NzNotificationService} from "ng-zorro-antd/notification";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  validateForm!: FormGroup;

  submitForm(): void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    if (this.validateForm.valid) {
      // this.createBasicNotification();
      this.router.navigate(['api/project/']).then(() => {
        this.createBasicNotification();
      })
    }
  }

  createBasicNotification(): void {
    this.notification
      .blank(
        'Notification',
        'You have logged in successfully!'
      )
      .onClick.subscribe(() => {
      console.log('notification clicked!');
    });
  }

  constructor(private fb: FormBuilder,
              private notification: NzNotificationService,
              private router: Router) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }

}
