import { Injectable } from '@angular/core';
import { CredentialDTO } from '../model/credential-dto';

@Injectable({
    providedIn: 'root'
})
export class CredentialService {
    private _credential: CredentialDTO;

    constructor() {
        this.restore();
    }

    get credential(): string {
        return this._credential == null ? null : 'Basic ' + btoa(this._credential.username + ':' + this._credential.password);
    }

    update(credential: CredentialDTO) {
        this._credential = credential;
    }

    invalidate() {
        this._credential = null;
        localStorage.removeItem(CredentialService.STORAGE_KEY);
    }

    restore(): void {
        const credential = localStorage.getItem(CredentialService.STORAGE_KEY);
        if (credential != null) {
            this._credential = JSON.parse(credential);
        }
    }

    save(): void {
        if (this._credential != null) {
            localStorage.setItem(CredentialService.STORAGE_KEY, JSON.stringify(this._credential));
        }
    }

    hasCredential(): boolean {
        return this._credential != null;
    }

    private static get STORAGE_KEY(): string {
        return 'credential';
    }

    get user(): CredentialDTO {
        return this._credential;
    }
}
