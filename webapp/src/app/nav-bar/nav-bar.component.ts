import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../service/authentication.service";
import {Router} from "@angular/router";
import {MatSlideToggleChange} from "@angular/material";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  constructor(private auth: AuthenticationService,
              private router: Router) {
  }

  ngOnInit() {
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
