import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServesService {

  constructor() { }
  getusers(){
    return  ["omnia" ,"essam" ,"alaa"];
  }
}
