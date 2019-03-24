import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Unit} from "../model/unit";
import {Resources} from "../model/Resources";
import {Observable} from "rxjs";
import {of} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ResourcesService {
  private units: Unit[];

  constructor(private http: HttpClient) {
  }

  fetchUnits(): Observable<Unit[]> {
    if (this.units) {
      return of(this.units);
    } else {
      return this.http.get<Resources>("/api/units").pipe(map(data => {
        this.units = data._embedded.units;
        return this.units;
      }));
    }
  }
}
