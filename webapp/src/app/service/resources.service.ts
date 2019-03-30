import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Unit} from "../model/unit";
import {Observable, of} from "rxjs";
import {map} from "rxjs/operators";
import {Itinerary} from "../model/Itinerary";

@Injectable({
  providedIn: 'root'
})
export class ResourcesService {
  private units: Unit[];
  private itineraries: Map<number, Itinerary> = new Map();
  private files: File[];

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

  fetchItinerary(id: number): Observable<Itinerary> {
    if (this.itineraries.get(id)) {
      return of(this.itineraries.get(id));
    } else {
      return this.http.get<Itinerary>("/api/itineraries/" + id).pipe(map(data => {
        this.itineraries.set(id, data);
        return data;
      }));
    }
  }

  fetchFilesSummary(id: number): Observable<File[]> {
    if (this.files) {
      return of(this.files);
    } else {
      return this.http.get<{_embedded}>("/api/units/"+id+"/forms/").pipe(map(data => {
        this.files = data._embedded.forms;
        return this.files;
      }));
    }
  }
}
