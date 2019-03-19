import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {CredentialService} from "../service/credential.service";
import {catchError} from "rxjs/operators";

export class AuthInterceptor implements HttpInterceptor {
  constructor(private manager: CredentialService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.manager.hasCredential()) {
      const auth = req.clone({
        headers: req.headers.set('Authorization', this.manager.credential)
      });
      const response = next.handle(auth);
      return response.pipe(catchError(err => {
        this.manager.invalidate();
        return throwError(err);
      }));
    } else {
      return next.handle(req);
    }
  }
}
