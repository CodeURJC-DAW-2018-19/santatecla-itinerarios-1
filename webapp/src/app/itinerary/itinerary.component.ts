import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Itinerary } from '../model/itinerary';
import { ResourcesService } from '../service/resources.service';
import { Items } from '../model/items';

@Component({
    selector: 'app-itinerary',
    templateUrl: './itinerary.component.html',
    styleUrls: ['./itinerary.component.css']
})
export class ItineraryComponent implements OnInit {
    id: number;
    itinerary: Itinerary;
    items: Items[];

    constructor(
        private rest: ResourcesService,
        private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.id = params.id;
            this.rest.fetchItinerary(this.id).subscribe(itinerary => {
                this.itinerary = itinerary;
                this.rest.fetchResources(itinerary.items, Items, 'items').subscribe(items => this.items = items);
            });
        });
    }
}
