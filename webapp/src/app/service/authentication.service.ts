import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CredentialService} from "./credential.service";
import {CredentialDTO} from "../model/credential-dto";
import {API_LOG_OUT, API_PROFILE, API_SIGN_UP} from "../config";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private http: HttpClient, private credential: CredentialService) {
  }

  private authenticate(callback?: () => void, error?: () => void): void {
    this.http.get(API_PROFILE).subscribe(response => {
      this.credential.save();
      return callback && callback();
    }, error);
  }

  login(credential: CredentialDTO, callback?: () => void, error?: () => void): void {
    this.credential.update(credential);
    this.authenticate(callback, error);
  }

  register(credential: CredentialDTO, callback?: () => void): void {
    this.http.post(API_SIGN_UP, credential).subscribe(r => this.login(credential, callback));
  }

  get authenticated(): boolean {
    return this.credential.hasCredential();
  }

  logout() {
    this.credential.invalidate();
    this.http.post(API_LOG_OUT, null).subscribe();
  }
}
