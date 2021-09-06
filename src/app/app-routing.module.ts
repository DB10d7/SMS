import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateStudentComponent } from './create-student/create-student.component';
import { DisplayStudentComponent } from './display-student/display-student.component';
import { StudentListComponent } from './student-list/student-list.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  {
    component: HomeComponent,
    path:''
  },
  {
    component: CreateStudentComponent,
    path:'student/add'
  },
  {
    component: StudentListComponent,
    path:'student'
  },
  {
    component: DisplayStudentComponent,
    path:'student/:id'
  },
  {
    component: UpdateStudentComponent,
    path:'student/update/:id'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
