import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class DataService {

  data = ["Hello","Wold","Кхм","Hello World Of Warcraft"];

  constructor() {

  }

  getData(){
    return this.data;
  }
}
