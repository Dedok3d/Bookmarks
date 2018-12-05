import { Component, OnInit, Inject } from '@angular/core';
import { DataService } from '../../service/data/data.service';
import { ControllerService } from '../../service/controller/controller.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material'
import { Bookmark } from '../../model/components';

export interface DialogData {
  name: string;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(public data: DataService,public controller: ControllerService,public dialog: MatDialog) { }

  ngOnInit() {
  }

  onOpenEditComponent(bookmark: Bookmark): void {
    this.controller.setEditComponent(bookmark);
  }

  onOpenDeleteDialog(bookmark: Bookmark): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      data: bookmark
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: '../dialog/consent.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: Bookmark,
    public controller: ControllerService) {

    }

  onOkClick(): void {
    this.controller.remove(this.data);
    this.dialogRef.close();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
