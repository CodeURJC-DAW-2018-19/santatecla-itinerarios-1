import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {Unit} from '../model/unit';
import {ResourcesService} from '../service/resources.service';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {FileDialogComponent} from "../files/file.dialog.component";

export interface UnitDialogData {
  unit:Unit;
  callback:(Unit)=>void;
}

@Component({
  selector: 'app-units',
  templateUrl: './units.component.html',
  styleUrls: ['./units.component.scss']
})
export class UnitsComponent implements OnInit {
  units: Unit[];
  searchInputTerm: string;
  unit: number;

  constructor(private rest: ResourcesService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.rest.fetchUnits().subscribe(units => this.units = units);
  }

  onBlurEvent() {

  }


  createUnit(): void {
    const dialogRef = this.dialog.open(AddUnitDialog, {
      data: {
        unit: this.unit,
        callback: unit => this.units.push(unit)
      }
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
    private rest: ResourcesService,
    @Inject(MAT_DIALOG_DATA) public data: UnitDialogData) {
    if(data.unit){
      data.unit=new Unit({},this.rest)
    }
  }


  onNoClick(): void {
    this.dialogRef.close();
  }

  addUnit() {
    this.rest.saveUnit(this.data.unit).subscribe(unit=>this.data.callback(unit));
    this.dialogRef.close();
  }
}
