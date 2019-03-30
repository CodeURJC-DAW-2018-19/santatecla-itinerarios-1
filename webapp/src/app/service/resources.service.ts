import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { map, tap } from "rxjs/operators";
import { Itinerary } from "../model/itinerary";
import { Unit } from "../model/unit";
import { Resource } from '../model/resource';

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
            return this.http.get<Unit[]>('/summary/units').pipe(map(data => {
                this.units = data;
                return this.units;
            }));
        }
    }

    fetchResources<T extends Resource>(resources: string, Entity: new (raw: any) => T): Observable<T[]> {
        return this.http.get<{ _embedded: {} }>('/api/' + resources).pipe(map(r => {
            return r._embedded[resources].map(raw => new Entity(raw));
        }));
    }

    fetchResource<T extends Resource>(url: string, Entity: new (raw: any) => T): Observable<T> {
        return this.http.get<T>(url).pipe(map(raw => {
            return new Entity(raw);
        }));
    }

    fetchItinerary(id: number): Observable<Itinerary> {
        if (this.itineraries.get(id)) {
            return of(this.itineraries.get(id));
        } else {
            return this.fetchResource('/api/itineraries/' + id, Itinerary).pipe(tap(itinerary => this.itineraries.set(id, itinerary)));
        }
    }

    fetchFilesSummary(id: number): Observable<File[]> {
        if (this.files) {
            return of(this.files);
        } else {
            return this.http.get<{ _embedded }>("/api/units/" + id + "/forms/").pipe(map(data => {
                this.files = data._embedded.forms;
                return this.files;
            }));
        }
    }
}
