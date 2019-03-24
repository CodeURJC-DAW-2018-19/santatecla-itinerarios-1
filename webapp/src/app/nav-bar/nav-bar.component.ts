import {Component, Input, OnInit} from '@angular/core';
import {AuthenticationService} from "../service/authentication.service";
import {Router} from "@angular/router";
import {MatSlideToggleChange} from "@angular/material";
import {Unit} from "../model/unit";
import {ResourcesService} from "../service/resources.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  units: Unit[];

  constructor(private auth: AuthenticationService,
              private router: Router,
              private rest: ResourcesService) {
  }

  get isAnonymous(): boolean {
    return !this.auth.authenticated;
  }

  get isAdmin(): boolean {
    return this.auth.hasRole("admin");
  }

  get isUser(): boolean {
    return this.auth.hasRole("user");
  }

  ngOnInit() {
    this.rest.fetchUnits().subscribe(units => this.units = units);
  }

  get checked(): boolean {
    return this.auth.authenticated;
  }

  toggle(change: MatSlideToggleChange) {
    if (change.checked) {
      this.router.navigate(["/login"]);
    } else {
      this.auth.logout();
      this.router.navigate(["/login"]);
    }
    change.source.checked = this.auth.authenticated;
  }
}
