import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CredentialService} from "./credential.service";
import {CredentialDTO} from "../model/credential-dto";
import {API_LOG_OUT, API_AUTH, API_SIGN_UP} from "../config";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private roles: string[];

  constructor(private http: HttpClient, private credential: CredentialService) {
  }

  hasRole(role: string) {
    if (this.roles != null) {
      return this.roles.includes(role)
    }
    return false;
  }

  private authenticate(callback?: () => void, error?: () => void): void {
    this.http.get<{ roles }>(API_AUTH).subscribe(auth => {
      this.credential.save();
      this.roles = auth.roles;
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
