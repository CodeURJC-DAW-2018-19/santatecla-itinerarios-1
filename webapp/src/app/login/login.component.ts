import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TdDialogService } from '@covalent/core';
import { CredentialDTO } from '../model/credential-dto';
import { AuthenticationService } from '../service/authentication.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    credential: CredentialDTO = { username: '', password: '' };
    loginMode: boolean;

    constructor(
        private auth: AuthenticationService,
        private location: Location,
        private dialogService: TdDialogService) {
    }

    ngOnInit() {
        if (this.auth.authenticated) {
            this.goBack();
        }
        this.loginMode = true;
    }

    private goBack(): void {
        this.location.back();
    }

    private showError(): void {
        this.dialogService.openAlert({
            message: 'Login failed'
        });
    }

    login_signUp() {
        if (this.loginMode) {
            this.auth.login(this.credential, this.goBack.bind(this), this.showError.bind(this));
        } else {
            this.auth.register(this.credential, this.goBack.bind(this), this.showError.bind(this));
        }
    }

    toggle() {
        this.loginMode = !this.loginMode;
    }

    get mode(): string {
        if (this.loginMode) {
            return 'Login';
        } else {
            return 'Sign Up';
        }
    }

    get admin(): boolean {
        return this.credential.roles && this.credential.roles[0] == 'admin';
    }

    set admin(isAdmin: boolean) {
        if (isAdmin) {
            this.credential.roles = ['admin'];
        } else {
            this.credential.roles = ['user'];
        }
    }
}
