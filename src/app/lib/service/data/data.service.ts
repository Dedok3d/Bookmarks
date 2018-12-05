import { Injectable } from '@angular/core';
import { Bookmark } from '../../model/components';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  key = "MyBestАrchive";
  data:Array<Bookmark>;

  currentBookmark:Bookmark;


  constructor() {
    this.data = [];

    const tmp = this.getDataLocalStorage(this.key);
    if(tmp == null){
      localStorage.clear();
      this.setDataLocalStorage(this.key,this.data);
    } else {
      this.data = tmp;
    }

  }

  getData(): Array<Bookmark>{
    return this.data;
  }

  addBookmark(name: string ,url: string ): void {
    let date = new Date();
    let str = date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + ('0' + date.getDate()).slice(-2)
    this.data.push({
      name:name,
      url:url,
      shortUrl:this.getLocation(url),
      date:str
    });
    this.update();
  }

  setCurrentBookmark(bookmark: Bookmark): void {
    this.currentBookmark = bookmark;
  }

  removeItem(item: Bookmark): void {
    this.remove(item);
  }

  remove(element: Bookmark) {
    const index = this.data.indexOf(element);
    this.data.splice(index, 1);
    this.update();
  }

  setDataLocalStorage(key:string, value): void {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      alert(e.message);
    }
  }

  getDataLocalStorage(key:string): Array<Bookmark> {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (e) {
      alert(e.message);
    }
  }

  update(): void {
    this.setDataLocalStorage(this.key,this.data);
  }

  getLocation(href: string): string {
    var l = document.createElement("a");
    l.href = href;
    return l.host;
  }

}
