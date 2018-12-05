import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data/data.service';
import { ControllerService } from '../../service/controller/controller.service';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  reg = '(https?://)([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-?=&]*/?';

  nameFormControl = new FormControl('', [
    Validators.required
  ]);

  urlFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(this.reg)
  ]);

  name:string;
  url:string;

  constructor(public data: DataService,public controller: ControllerService) {
    this.name = this.data.currentBookmark.name;
    this.url = this.data.currentBookmark.url;

  }

  ngOnInit() {
  }

  onSave(): void {
    console.log(this.name+" "+this.url);
    this.nameFormControl.markAsTouched();
    this.urlFormControl.markAsTouched();

    if(this.nameFormControl.invalid || this.urlFormControl.invalid){
      console.log("Error");
    }
    else{
      this.data.currentBookmark.name = this.name;
      this.data.currentBookmark.url = this.url;
      this.data.currentBookmark.shortUrl = this.data.getLocation(this.url)
      this.controller.update();
      this.controller.setListComponent();
    }
  }

  onCancel(): void {
    this.controller.setListComponent();
  }

}
