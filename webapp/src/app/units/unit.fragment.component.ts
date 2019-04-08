import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { TdDialogService } from '@covalent/core';
import { Itinerary } from '../model/itinerary';
import { Unit } from '../model/unit';
import { ResourcesService } from '../service/resources.service';
import { AuthenticationService } from '../service/authentication.service';

@Component({
    selector: 'app-unit-fragment',
    templateUrl: './unit.fragment.component.html',
    styleUrls: ['./unit.fragment.component.scss']
})
export class UnitsFragmentComponent implements OnInit {
    @Input()
    unit: Unit;
    itineraries: Itinerary[];

    @Output()
    delete: EventEmitter<any>;

    constructor(
        private rest: ResourcesService,
        private dialogService: TdDialogService,
        private auth: AuthenticationService
    ) {
        this.delete = new EventEmitter();
    }

    ngOnInit(): void {
        this.unit.itineraries.subscribe(itineraries => this.itineraries = itineraries);
    }

    deleteThis() {
        this.delete.emit();
    }

    deleteItinerary(itinerary: Itinerary) {
        this.rest.deleteResource(itinerary).subscribe(() => this.itineraries = this.itineraries.filter(i => i.id !== itinerary.id));
    }

    addItinerary(): void {
        this.dialogService.openPrompt({
            message: 'Introduzca el título',
            title: 'Añadir Nuevo Itinerario',
            cancelButton: 'Cancelar',
            acceptButton: 'Crear'
        }).afterClosed().subscribe((title: string) => {
            if (title) {
                this.rest.saveItinerary({ title, unit: this.unit.self }).subscribe(itinerary => {
                    this.itineraries.push(itinerary);
                });
            }
        });
    }

    get isAdmin() {
        return this.auth.isAdmin;
    }
}
