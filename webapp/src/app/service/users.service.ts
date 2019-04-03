import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {CredentialDTO} from "../model/credential-dto";
import {Observable, throwError} from "rxjs";
import {catchError, retry} from "rxjs/operators";



@Injectable({providedIn:"root"})

export class UsersService{

  url  = "https://localhost:8443/api/users";
  private user: CredentialDTO;

  constructor(private http: HttpClient){}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  }

  addUser(username:string, password:string, roles:string){
    this.user.username = username;
    this.user.password = password;
    this.user.roles = roles;
    this.createUser(this.user);
  }

  createUser(user):Observable<CredentialDTO> {
   return this.http.post<CredentialDTO>(this.url,JSON.stringify(user),this.httpOptions)
     .pipe(
       retry(1),
       catchError(this.handleError)
     )
  }


  //  this.http.post(this.url,this.user).subscribe(
  //     response => {
  //       this.userAdded();
  //     },
  //     error => {
  //       this.sendError();}
  //   );
  //   return false;
  // }

  private userAdded() {
    return true;
  }

  private sendError() {
    return false;
  }

  handleError(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
