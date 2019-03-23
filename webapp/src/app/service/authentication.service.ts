import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CredentialService} from "./credential.service";
import {CredentialDTO} from "../model/credential-dto";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private http: HttpClient, private credential: CredentialService) {
  }

  private authenticate(callback?: () => void, error?: () => void): void {
    this.http.get("/api").subscribe(response => {
      this.credential.save();
      return callback && callback();
    }, error);
  }

  login(credential: CredentialDTO, callback?: () => void, error?: () => void): void {
    this.credential.update(credential);
    this.authenticate(callback, error);
  }

  register(credential: CredentialDTO, callback?: () => void): void {
    this.http.post("/api/users", credential).subscribe(r => this.login(credential, callback));
  }

  get authenticated(): boolean {
    return this.credential.hasCredential();
  }

  logout(callback?: () => void) {
    this.http.post("/logout", null).subscribe(() => {
      this.credential.invalidate();
      return callback && callback();
    });
  }
}
