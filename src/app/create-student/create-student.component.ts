import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { SmsServiceService } from '../sms-service.service';


@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.css']
})
export class CreateStudentComponent implements OnInit {

  createStudents= new FormGroup({
    name: new FormControl(''),
    number: new FormControl(''),
    mailid: new FormControl(''),
    class: new FormControl(''),
    branch: new FormControl(''),
    section: new FormControl('')

  })
  constructor(private sms:SmsServiceService,private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }
  createStudent(){
    console.warn(this.createStudents.value);
    this.sms.createStudent(this.createStudents.value).subscribe((result)=>{
      console.warn("data is here",result);
      alert("Student Added Successfully");
      this.createStudents.reset();
      this.router.navigate(['blog']);
    })
  }
}
