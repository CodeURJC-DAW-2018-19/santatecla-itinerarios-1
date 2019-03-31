import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Itinerary } from '../model/itinerary';
import { ResourcesService } from '../service/resources.service';
import { Item } from '../model/item';

@Component({
    selector: 'app-itinerary',
    templateUrl: './itinerary.component.html',
    styleUrls: ['./itinerary.component.css']
})
export class ItineraryComponent implements OnInit {
    itinerary: Itinerary;
    items: Item[];

    constructor(
        private rest: ResourcesService,
        private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.rest.fetchItinerary(params.id).subscribe(itinerary => {
                this.itinerary = itinerary;
                itinerary.items.subscribe(items => this.items = items);
            });
        });
    }
}
