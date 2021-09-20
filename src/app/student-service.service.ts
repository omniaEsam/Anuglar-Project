import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  constructor() { }
  getStudent(){
    return ["ali","omnia" ,"aya", "hossam"];
  }
}
