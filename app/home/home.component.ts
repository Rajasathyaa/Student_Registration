import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from '../module/student';
import { StudentService } from '../service/student.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit{
  
  id:any;
  student:Student = new Student();
 
  constructor(private studentService : StudentService ,
    private route: ActivatedRoute ){}
  ngOnInit(): void {
    
    this.studentService.getHome().subscribe(data => {
      return data;
    });
  }
}


