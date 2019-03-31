import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Itinerary } from '../model/itinerary';
import { ResourcesService } from '../service/resources.service';
import { Unit } from '../model/unit';
import { mergeMap, exhaustMap } from 'rxjs/operators';

@Component({
    selector: 'app-unit',
    templateUrl: './unit.component.html',
    styleUrls: ['./unit.component.scss']
})
export class UnitComponent implements OnInit {
    unit: Unit;
    itineraries: Itinerary[];

    constructor(
        private route: ActivatedRoute,
        private rest: ResourcesService) {
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.rest.fetchUnit(Number(params.id)).subscribe(unit => {
                this.unit = unit;
                unit.itineraries.subscribe(itineraries => this.itineraries = itineraries);
            });
        });
    }
}
