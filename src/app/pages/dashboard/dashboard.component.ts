import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  array = ['Here can be your advertising', 'Here can be your advertising', 'Here can be your advertising', 'Here can be your advertising'];
  tabs = ['News feed', 'Statistics'];

  constructor() { }

  ngOnInit(): void {
  }

}
