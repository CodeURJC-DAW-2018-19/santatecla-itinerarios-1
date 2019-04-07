import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { TdDialogService } from '@covalent/core';
import { Itinerary } from '../model/itinerary';
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

    constructor(
        private rest: ResourcesService,
        public dialog: MatDialog,
        private dialogService: TdDialogService
    ) {
    }

    ngOnInit(): void {
        this.rest.fetchUnits().subscribe(units => this.units = units);
    }

    onBlurEvent() {

    }

    createUnit(): void {
        this.dialogService.openPrompt({
            message: 'Introduzca el título',
            title: 'Añadir Nueva Unidad',
            cancelButton: 'Cancelar',
            acceptButton: 'Crear'
        }).afterClosed().subscribe((title: string) => {
            if (title) {
                this.rest.saveUnit(new Unit({ title }, this.rest)).subscribe(unit => this.units.push(unit));
            }
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
            this.rest.addResourceRelation(unit, this.data.itinerary, 'itineraries').subscribe(itinerary => this.data.callback(itinerary))
        });
        this.dialogRef.close();
    }
}
