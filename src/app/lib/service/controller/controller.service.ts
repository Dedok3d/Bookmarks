import { Injectable } from '@angular/core';
import { Components } from '../../model/components';
import { DataService } from '../data/data.service';
import { Bookmark } from '../../model/components';


@Injectable({
  providedIn: 'root'
})
export class ControllerService {
  current:Components;

  constructor(public data: DataService) {
    this.current = {
      add:false,
      list:true,
      edit:false
    }
  }

  setAddComponent(): void {
    for (let item in this.current) this.current[item]=false;
    this.current.add = true;
  }

  setListComponent(): void {
    for (let item in this.current) this.current[item]=false;
    this.current.list = true;
  }

  setEditComponent(bookmark : Bookmark): void {
    for (let item in this.current) this.current[item]=false;
    this.current.edit = true;
    this.data.setCurrentBookmark(bookmark);
  }

  remove(item : Bookmark): void {
    this.data.removeItem(item);
    this.setListComponent();
  }

  update(): void {
    this.data.update();
    this.setListComponent();
  }
}
