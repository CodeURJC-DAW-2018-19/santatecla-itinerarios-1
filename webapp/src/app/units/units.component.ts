import {Component, Inject, OnInit} from '@angular/core';
import { Unit } from '../model/unit';
import { ResourcesService } from '../service/resources.service';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material";
import {DialogData} from "../file/file.component";
import {File} from "../model/file";

@Component({
    selector: 'app-units',
    templateUrl: './units.component.html',
    styleUrls: ['./units.component.scss']
})
export class UnitsComponent implements OnInit {
    units: Unit[];
    searchInputTerm: string;

    constructor(private rest: ResourcesService,public dialog: MatDialog) {
    }
    ngOnInit(): void {
        this.rest.fetchUnits().subscribe(units => this.units = units);
    }

    onBlurEvent() {

    }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddUnitDialog, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

@Component({
  selector: 'app-add-unit',
  templateUrl: './add-unit.component.html',
})
export class AddUnitDialog {

  constructor(
    public dialogRef: MatDialogRef<AddUnitDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  public addUnit(title: string, unit: Unit) {
    unit.title = title;
    this.dialogRef.close();
  }
}
