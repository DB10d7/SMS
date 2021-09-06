import { Component, OnInit } from '@angular/core';
import { SmsServiceService } from '../sms-service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-display-student',
  templateUrl: './display-student.component.html',
  styleUrls: ['./display-student.component.css']
})
export class DisplayStudentComponent implements OnInit {

  singleStudent: any;
  constructor(private sms:SmsServiceService,private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.viewStudent();
  }
  viewStudent(){
    this.sms.viewStudent(this.route.snapshot.params['id']).subscribe((result)=>{
      console.log("data is here",result);
      this.singleStudent= result;
      console.log(this.singleStudent);
    })
  }
}
