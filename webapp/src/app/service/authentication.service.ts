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

  private authenticate(callback?: () => void): void {
    this.http.get("/api").subscribe(response => {
      this.credential.save();
      return callback && callback();
    });
  }

  login(credential: CredentialDTO, callback?: () => void): void {
    this.credential.update(credential);
    this.authenticate(callback);
  }

  register(credential: CredentialDTO, callback?: () => void): void {
    this.http.post("/api/users", credential).subscribe(r => this.login(credential, callback));
  }

  get authenticated(): boolean {
    return this.credential.hasCredential();
  }

  logout(callback?: () => void) {
    this.http.get("/logout").subscribe(() => {
      this.credential.invalidate();
      return callback && callback();
    });
  }
}
