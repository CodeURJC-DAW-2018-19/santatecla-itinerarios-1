import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Unit } from '../model/unit';
import { AuthenticationService } from '../service/authentication.service';
import { CredentialService } from '../service/credential.service';
import { ResourcesService } from '../service/resources.service';

@Component({
    selector: 'app-units',
    templateUrl: './units.component.html',
    styleUrls: ['./units.component.scss']
})
export class UnitsComponent implements OnInit {
    units: Unit[];

    constructor(
        private credential: CredentialService,
        private auth: AuthenticationService,
        private rest: ResourcesService,
        private router: Router
    ) {
    }

    ngOnInit(): void {
        this.rest.fetchUnits().subscribe(units => this.units = units);
    }

    get isAnonymous(): boolean {
        return !this.auth.authenticated;
    }

    get role(): string {
        if (this.auth.authenticated) {
            return this.credential.user.roles == null ? null : this.credential.user.roles[0];
        } else {
            return 'visitante';
        }
    }

    get username(): string {
        if (this.auth.authenticated) {
            return this.credential.user.username;
        } else {
            return 'visitante';
        }
    }

    logout() {
        this.auth.logout();
    }

    login() {
        this.router.navigate(['/login']);
    }
}
