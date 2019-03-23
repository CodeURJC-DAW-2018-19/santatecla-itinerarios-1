import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const auth = req.clone({
      headers: req.headers.set('Authorization', "Basic YWRtaW46cGFzcw==")
    });
    return next.handle(auth);
  }
}
