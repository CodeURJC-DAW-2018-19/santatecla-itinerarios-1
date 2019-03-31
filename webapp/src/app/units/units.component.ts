import { Component, OnInit } from '@angular/core';
import { Unit } from '../model/unit';
import { ResourcesService } from '../service/resources.service';
import { AuthenticationService } from '../service/authentication.service';

@Component({
    selector: 'app-units',
    templateUrl: './units.component.html',
    styleUrls: ['./units.component.scss']
})
export class UnitsComponent implements OnInit {
    units: Unit[];

    constructor(
        private auth: AuthenticationService,
        private rest: ResourcesService
    ) {
    }

    ngOnInit(): void {
        this.rest.fetchUnits().subscribe(units => {
            this.units = units;
        });
    }

    get isAnonymous(): boolean {
        return !this.auth.authenticated;
    }
}
