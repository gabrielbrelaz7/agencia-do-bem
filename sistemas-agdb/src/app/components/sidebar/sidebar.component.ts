import { Component, OnInit } from '@angular/core';
declare var $: any;

import { faTachometerFast, 
  faCalendar, 
  faChalkboardTeacher, 
  faUserGraduate, 
  faUsers,
  faLineChart
 } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  faTachometerFast = faTachometerFast;
  faCalendar = faCalendar;
  faChalkboardTeacher = faChalkboardTeacher;
  faUserGraduate = faUserGraduate;
  faUsers = faUsers;
  faLineChart = faLineChart;

  constructor() { }

  ngOnInit(): void {

  }

}
