import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Class } from 'src/app/models/class.model';
import { Student } from 'src/app/models/student.model';
import { ClassService } from 'src/app/services/class.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  now = moment().lang("pt"); 

  classes: Class[] = [];
  students: Student[] = [];
  isStudents: boolean = false
  isClasses: boolean = true



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

  getStudentsByClass(classNumber: any) {
    this.classService.getStudents(classNumber).subscribe((students: Student[]) => {
      this.students = students;
      this.isStudents = true;
      this.isClasses =  false;
      console.log(students)
    });
  }



  backPage() {
    this.isStudents = false;
    this.isClasses =  true;
  }

}
