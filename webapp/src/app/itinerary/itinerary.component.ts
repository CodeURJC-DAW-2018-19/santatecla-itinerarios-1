import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ResourcesService} from "../service/resources.service";
import {Itinerary} from "../model/Itinerary";

@Component({
  selector: 'app-itinerary',
  templateUrl: './itinerary.component.html',
  styleUrls: ['./itinerary.component.css']
})
export class ItineraryComponent implements OnInit {
  id: number;
  itinerary: Itinerary;

  constructor(private rest: ResourcesService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.rest.fetchItinerary(this.id).subscribe(item => this.itinerary = item);
    });
  }
}
