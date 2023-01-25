
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../module/student';
import { StudentService } from '../service/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit{

  students: Student[] = [];
  studentService: any;
  constructor(private studentservice: StudentService, private router: Router) {}

  ngOnInit(): void {
    this.getStudents();
  }
  private getStudents(){
    this.studentservice.getStudentsList().subscribe(data => {
      this.students = data;
    });
  }
  
  update(id:number){
    this.router.navigate(['update' ,id]);
  }
  delete(student){
    this.studentService.delete(student.id).subscribe(
      data => {
        console.log(data);
        this.getStudents();
    },
    error => {console.log(error);
    }
    );
    
  }

}


