import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthenticationService} from "../service/authentication.service";

@Injectable({
  providedIn: 'root'
})
export class AccessGuard implements CanActivate {
  constructor(private router: Router, private auth: AuthenticationService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const requiresLogin: boolean = route.data.requiresLogin || true;
    if (requiresLogin) {
      return new Promise((resolve, reject) => {
        if (this.auth.authenticated) {
          resolve(true);
        } else {
          this.router.navigate(["/login"]);
          resolve(false);
        }
      });
    }
    return true;
  }
}
