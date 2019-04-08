import { Component, OnInit } from '@angular/core';
import { TdDialogService } from '@covalent/core';
import { Itinerary } from '../model/itinerary';
import { Unit } from '../model/unit';
import { ResourcesService } from '../service/resources.service';
import { AuthenticationService } from '../service/authentication.service';

@Component({
    selector: 'app-units',
    templateUrl: './units.component.html',
    styleUrls: ['./units.component.scss']
})
export class UnitsComponent implements OnInit {
    units: Unit[];
    searchInputTerm: string;
    itinerary: Itinerary;

    constructor(
        private rest: ResourcesService,
        private dialogService: TdDialogService,
        private auth: AuthenticationService
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

    get isAdmin() {
        return this.auth.isAdmin;
    }
}
