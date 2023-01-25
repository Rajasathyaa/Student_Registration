import { Component, OnInit } from '@angular/core';
import { Student } from '../module/student';
import { StudentService } from '../service/student.service';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
@Component({
  selector: 'app-update-list',
  templateUrl: './update-list.component.html',
  styleUrls: ['./update-list.component.css']
})
export class UpdateListComponent implements OnInit {
 
  id:any;
  student: Student = new Student();
  constructor(private studentService : StudentService ,private route: ActivatedRoute ,private router: Router){}

  
  ngOnInit(): void{
    this.id = this.route.snapshot.params['id'];
    this.studentService.getStudentById(this.id).subscribe(
      (data) => {
        this.student = data;
      });
  }
  onSubmit() {
    this.studentService.update(this.id, this.student).subscribe( data =>{
      this.goToStudentsList();
    });
  }
  goToStudentsList(){
    this.router.navigate(['/update']);
  }
   
  }

