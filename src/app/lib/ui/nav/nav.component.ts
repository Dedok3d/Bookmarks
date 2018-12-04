import { Component, OnInit } from '@angular/core';
import { ControllerService } from '../../service/controller/controller.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(public controller: ControllerService) { }

  ngOnInit() {
  }

  onOpenAddComponent(){
    this.controller.setAddComponent();
  }

  onOpenListComponent(){
    this.controller.setListComponent();
  }
}
