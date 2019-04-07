import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Itinerary } from '../model/itinerary';
import { ResourcesService } from '../service/resources.service';
import { Unit } from '../model/unit';
import { Item } from '../model/item';

@Component({
    selector: 'app-sub-itinerary',
    templateUrl: './sub-itinerary.component.html',
    styleUrls: ['./sub-itinerary.component.css']
})
export class SubItineraryComponent implements OnInit {
    @Input()
    itinerary: Itinerary;

    @Output()
    delete: EventEmitter<any>;

    @Output()
    update: EventEmitter<Itinerary>;

    units: Unit[];

    itineraries: Itinerary[];

    items: Item[];

    constructor(
        private rest: ResourcesService
    ) {
        this.delete = new EventEmitter();
        this.update = new EventEmitter();
    }

    ngOnInit() {
        this.itinerary = new Itinerary(this.itinerary, this.rest);
        this.rest.fetchUnits().subscribe(units => {
            this.units = units;
        });
        this.itinerary.items.subscribe(items => this.items = items);
    }

    deleteSubItinerary() {
        this.delete.emit();
    }

    updateItineraries(unit: Unit) {
        unit.itineraries.subscribe(itineraries => this.itineraries = itineraries);
    }

    change(itinerary: Itinerary) {

    }
}
