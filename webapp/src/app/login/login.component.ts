import {Component, OnInit} from '@angular/core';
import {CredentialDTO} from "../model/credential-dto";
import {AuthenticationService} from "../service/authentication.service";
import {Location} from '@angular/common';
import {TdDialogService} from "@covalent/core";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private credential: CredentialDTO = {username: "", password: ""};

  constructor(private auth: AuthenticationService,
              private location: Location,
              private dialogService: TdDialogService,
              private router: Router) {
  }

  ngOnInit() {
    if (this.auth.authenticated) {
      this.goBack();
    }
  }

  private goBack(): void {
    this.location.back();
  }

  private showError(): void {
    this.dialogService.openAlert({
      message: 'Login failed'
    });
  }

  login() {
    this.auth.login(this.credential, this.goBack.bind(this), this.showError.bind(this));
  }

  get password(): string {
    return this.credential.password;
  }

  set password(password: string) {
    this.credential.password = password;
  }

  get username(): string {
    return this.credential.username;
  }

  set username(username: string) {
    this.credential.username = username;
  }

  gotoSignUp() {
    this.router.navigate(['/signUp']);
  }
}
