import {Component, Input, OnInit} from '@angular/core';
import {Unit} from "../model/unit";
import {ResourcesService} from "../service/resources.service";

@Component({
  selector: 'app-units',
  templateUrl: './units.component.html',
  styleUrls: ['./units.component.scss']
})
export class UnitsComponent implements OnInit {
  @Input()
  units: Unit[];
  json: string;

  constructor(private rest: ResourcesService) {
  }

  ngOnInit(): void {
    this.rest.fetchUnits().subscribe(units => {
      this.units = units;
      this.json = JSON.stringify(this.units);
    });
  }
}
