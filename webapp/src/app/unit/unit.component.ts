import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Itinerary } from '../model/Itinerary';
import { ResourcesService } from '../service/resources.service';

@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.scss']
})
export class UnitComponent implements OnInit {
  id: number;
  itineraries: Itinerary[];

  constructor(
    private route: ActivatedRoute,
    private rest: ResourcesService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = parseInt(params.id);
      this.rest.fetchUnitsSummary().subscribe(units => {
        for (const unit of units) {
          if (unit.id === this.id) {
            this.itineraries = unit.itineraries;
          }
        }
      });
    });
  }
}
