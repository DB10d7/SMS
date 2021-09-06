import { Component, OnInit } from '@angular/core';
import { SmsServiceService } from '../sms-service.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  listStudent: any;
  constructor(private sms:SmsServiceService,private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    this.sms.getStudent().subscribe((resp)=>{
      this.listStudent = resp;
      })
  }
  viewStudent(id:number){
    this.router.navigate(['student',id]);
  }
  updateStudent(id:number){
    this.router.navigate(['student/update',id]);
  }
  createStudent(){
    this.router.navigate(['student/add']);
  }
  deleteStudent(id:number){
    this.sms.deleteStudent(id).subscribe((res)=>{
      console.warn("data is here",res);
      alert("Delete Student");
      this.ngOnInit();
    })
  }
}
