import { Component, OnInit, Input } from '@angular/core';
import { Itinerary } from '../model/itinerary';

@Component({
    selector: 'app-sub-itinerary',
    templateUrl: './sub-itinerary.component.html',
    styleUrls: ['./sub-itinerary.component.css']
})
export class SubItineraryComponent implements OnInit {
    @Input()
    itinerary: Itinerary;

  units = [
    {text: 'Javascript', atribute2: 1 },
    {text: 'CERN', atribute2: 1},
  ];


    constructor() { }

    ngOnInit() {
    }
}
