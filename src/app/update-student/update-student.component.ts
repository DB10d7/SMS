import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { SmsServiceService } from '../sms-service.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {

  updateStudents= new FormGroup({
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
  updateStudent(){
    console.warn(this.updateStudents.value)
    this.sms.updateStudent(this.route.snapshot.params['id'],this.updateStudents.value).subscribe((result)=>{
      console.warn("data is here",result);
      alert("Blog Updated Successfully");
      this.updateStudents.reset();
      this.router.navigate(['student']);
    })
  }
}
