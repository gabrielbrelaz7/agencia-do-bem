import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Class } from '../models/class.model';
import { Student } from '../models/student.model';


@Injectable({
  providedIn: 'root'
})
export class ClassService {

  constructor(
    private httpClient:HttpClient    
    ) { 

    }

    getAll(): Observable<Class[]> {
    const endpoint = `http://localhost:3000/turmas`
    return this.httpClient.get<Class[]>(endpoint)
  }


  getStudents(classNumber: string): Observable<Student[]> {
    const endpoint = `http://localhost:3000/alunos?turma=${classNumber}`
    return this.httpClient.get<Student[]>(endpoint)
  }

}
