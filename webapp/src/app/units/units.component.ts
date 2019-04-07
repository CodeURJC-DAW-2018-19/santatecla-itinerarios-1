import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Itinerary } from "../model/itinerary";
import { Unit } from '../model/unit';
import { ResourcesService } from '../service/resources.service';

export interface UnitDialogData {
    unit: Unit;
    callback: (Unit) => void;
}

export interface ItineraryDialogData {
    itinerary: Itinerary;
    callback: (Itinerary) => void;
    unit: number
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
    itinerary: Itinerary;

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

    deleteUnit(unit: Unit) {
        this.rest.deleteResource(unit).subscribe(() => this.units = this.units.filter(e => e.id !== unit.id));
    }

    addItinerary(unit): void {
        const dialogRef = this.dialog.open(AddItineraryDialog, {
            data: {
                itinerary: this.itinerary,
                unit: unit.id
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
        if (!data.unit) {
            data.unit = new Unit({}, this.rest)
        }
    }


    onNoClick(): void {
        this.dialogRef.close();
    }

    addUnit() {
        this.rest.saveUnit(this.data.unit).subscribe(unit => this.data.callback(unit));
        this.dialogRef.close();
    }
}

@Component({
    selector: 'app-add-itinerary',
    templateUrl: './add-itinerary.component.html',
})
export class AddItineraryDialog {
    constructor(
        public dialogRef: MatDialogRef<AddItineraryDialog>,
        private rest: ResourcesService,
        @Inject(MAT_DIALOG_DATA) public data: ItineraryDialogData) {
        if (!data.itinerary) {
            data.itinerary = new Itinerary({}, this.rest)
        }
    }


    onNoClick(): void {
        this.dialogRef.close();
    }

    addItinerary() {
        this.rest.fetchUnit(this.data.unit).subscribe(unit => {
            this.rest.addResourceRelation(unit, this.data.itinerary, "itineraries").subscribe(itinerary => this.data.callback(itinerary))
        });
        this.dialogRef.close();
    }
}
