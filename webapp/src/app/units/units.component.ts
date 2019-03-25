import {Component, OnInit} from '@angular/core';
import {Unit} from "../model/unit";
import {ResourcesService} from "../service/resources.service";

@Component({
  selector: 'app-units',
  templateUrl: './units.component.html',
  styleUrls: ['./units.component.scss']
})
export class UnitsComponent implements OnInit {
  units: Unit[];

  constructor(private rest: ResourcesService) {
  }

  ngOnInit(): void {
    this.rest.fetchUnitsSummary().subscribe(units => {
      this.units = units;
    });
  }
}
