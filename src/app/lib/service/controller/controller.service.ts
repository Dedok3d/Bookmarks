import { Injectable } from '@angular/core';

interface Component {
  add: boolean;
  list: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ControllerService {
  current:Component;

  constructor() {
    this.current = {
      add:false,
      list:true
    }
  }

  setAddComponent(){
    for (let item in this.current) this.current[item]=false;
    this.current.add = true;
  }

  setListComponent(){
    for (let item in this.current) this.current[item]=false;
    this.current.list = true;
  }
}
