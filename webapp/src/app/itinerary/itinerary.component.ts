import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Itinerary } from '../model/itinerary';
import { ResourcesService } from '../service/resources.service';
import { Item } from '../model/item';
import { View } from '../model/view';

@Component({
    selector: 'app-itinerary',
    templateUrl: './itinerary.component.html',
    styleUrls: ['./itinerary.component.scss']
})
export class ItineraryComponent implements OnInit {
    itinerary: Itinerary;
    items: Item[];
    option = 1;

    constructor(
        private rest: ResourcesService,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.rest.fetchItinerary(params.id).subscribe(itinerary => {
                this.itinerary = itinerary;
                itinerary.items.subscribe(items => this.items = items);
            });
        });
    }

    create() {
        switch (this.option) {
            case 1:
                this.rest.saveView(new View({ itinerary: this.itinerary.id }, this.rest)).subscribe(view => this.items.push(view));
                break;
            case 2:
                break;
        }
    }

    deleteItem(item: Item) { // TODO: can't delete subitinerary
        this.rest.deleteResource(item).subscribe(() => this.items = this.items.filter(e => e.id !== item.id));
    }
}
