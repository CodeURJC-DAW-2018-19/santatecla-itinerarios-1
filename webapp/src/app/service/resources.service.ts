import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Unit} from "../model/unit";
import {Observable, of} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ResourcesService {
  private units: Unit[];

  constructor(private http: HttpClient) {
  }

  fetchUnitsSummary(): Observable<Unit[]> {
    if (this.units) {
      return of(this.units);
    } else {
      return this.http.get<Unit[]>("/summary?units").pipe(map(data => {
        this.units = data;
        return this.units;
      }));
    }
  }
}
