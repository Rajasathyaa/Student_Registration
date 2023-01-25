import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentsComponent } from './add-students/add-students.component';
import { HomeComponent } from './home/home.component';

import { StudentComponent } from './student/student.component';
import { UpdateListComponent } from './update-list/update-list.component';



const routes: Routes = [
  { path: 'student', component: StudentComponent },
  { path: 'add', component: AddStudentsComponent },
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path: 'update/:id', component: UpdateListComponent},
  {path:'home',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
