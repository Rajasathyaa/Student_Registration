import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Student } from '../module/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private url = "http://localhost:8080/student/";

  constructor(private http: HttpClient) { }

  getHome(): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}`);
  }

  // Get Users - Read
  getStudentsList(): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}getAll`);
  }

  // Add User - Create
  addStudents(student: Student): Observable<Object> {
    return this.http.post<Student>(`${this.url}add`, student)
  }

  // Get User by Id - Read
  getStudentById(id: number): Observable<Student> {
    return this.http.get<Student>(`${this.url}get/${id}`);
  }

  // Update User - Update
  update(id: number, student?: any): Observable<any> {
    return this.http.put<any>(`${this.url}update{id}`, student);
  }

  // Delete User - Delete
   delete(id: number): Observable<Student> {
    return this.http.delete<Student>('${this.url}delete{id}' + id);
  }


}