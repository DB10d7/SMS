import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http'
import { Observable, pipe } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SmsServiceService {

  url="http://localhost:3000/student";
  constructor(private http: HttpClient) { }

  getStudent(){
    console.log(this.http.get(this.url));
    return this.http.get(this.url);
  }
  deleteStudent(id:number){
    console.log(this.http.get("http://localhost:3000/student/"+id));
    return this.http.delete("http://localhost:3000/student/"+id);
  }
  createStudent(data:any){
    console.log(this.http.get(this.url,data));
    return this.http.get(this.url,data);
  }
}
