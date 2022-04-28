import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as moment from 'moment';
import { Class } from 'src/app/models/class.model';
import { Student } from 'src/app/models/student.model';
import { ClassService } from 'src/app/services/class.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-main-table',
  templateUrl: './main-table.component.html',
  styleUrls: ['./main-table.component.scss']
})
export class MainTableComponent implements OnInit {

  now = moment().lang("pt"); 

  classes: Class[] = [];
  students: Student[] = [];
  isStudents: boolean = false
  isClasses: boolean = true

  statusSelected: string = "";


  constructor(
    private classService: ClassService,
    private _location: Location
    ) { 
    
  }


  ngOnInit(): void {
    this.getClasses()
  }

  getClasses() {
    this.classService.getAll().subscribe((classes: Class[]) => {
      this.classes = classes;
    });

  }

  getClassesFiltered() {
    this.classService.getAll().subscribe((classes: Class[]) => {

      const filterResult = classes.filter((element) => {
        return element.status === this.statusSelected 
      })

      this.classes = filterResult  

    });
  }

  getStudentsByClass(classNumber: any) {
    this.classService.getStudents(classNumber).subscribe((students: Student[]) => {
      this.students = students;
      this.isStudents = true;
      this.isClasses =  false;
    });
  }

  filterStatus(event: any) {
    this.statusSelected = event.target.value;
    this.getClassesFiltered()
  }


  backPage() {
    this.isStudents = false;
    this.isClasses =  true;
  }

}
