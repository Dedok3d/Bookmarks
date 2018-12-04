import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(public data: DataService) { }

  ngOnInit() {
  }

}
