import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-sub-itinerary',
    templateUrl: './sub-itinerary.component.html',
    styleUrls: ['./sub-itinerary.component.css']
})
export class SubItineraryComponent implements OnInit {
    @Input()
    link: string;
    constructor() { }

    ngOnInit() {
    }

}
