import { Component, OnInit } from '@angular/core';
import { ControllerService } from '../../service/controller/controller.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(public controller: ControllerService) {

  }

  ngOnInit() {
  }

}
