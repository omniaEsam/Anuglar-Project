import { Component } from '@angular/core';
import { StudentServiceService } from './student-service.service';
import { UserServesService } from './user-serves.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public myStudent:StudentServiceService){
   this.myUsers= this.myStudent.getStudent();
  //  console.log(this.myStudent.getStudent());
  }
  myUsers;
  title = 'myFirstProject';
  firstName='omnia';
  secondName ="Essam";
  email ="omnia@gmail.com";
  job="Front-end developer";
  myDate= new Date();
  num1:Number=0;
  num2:Number=0;
  total:Number=0;
  calc(){
  this.total=Number(this.num1)+Number(this.num2);
  // console.log(this.myUsers.getusers());
  
  }
 
}
 
