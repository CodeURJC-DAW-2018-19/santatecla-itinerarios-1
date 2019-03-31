import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, tap, shareReplay } from 'rxjs/operators';
import { Resource } from '../model/resource';
import { Unit } from '../model/unit';
import { API_UNITS } from '../config';
import { Itinerary } from '../model/Itinerary';
import { File } from '../model/file';

@Injectable({
    providedIn: 'root'
})
export class ResourcesService {
    private cache: Map<string, Observable<any>> = new Map();

    constructor(private http: HttpClient) {
    }

    fetchResources<T extends Resource>(
        url: string,
        resource: string,
        Entity: new (raw: any, rest: ResourcesService) => T
    ): Observable<T[]> {
        if (!this.cache.get(url)) {
            this.cache.set(url, this.http.get<{ _embedded: {} }>(url).pipe(
                map<{ _embedded: {} }, T[]>(r => r._embedded[resource].map(raw => new Entity(raw, this))),
                tap(entities => entities.forEach(entity => {
                    this.cache.set(entity.self, of(entity));
                })),
                shareReplay(1)
            ));
        }
        return this.cache.get(url);
    }

    fetchResource<T extends Resource>(url: string, Entity: new (raw: any, rest: ResourcesService) => T): Observable<T> {
        if (!this.cache.get(url)) {
            this.cache.set(url, this.http.get<T>(url).pipe(
                map(raw => new Entity(raw, this)),
                tap(entity => this.cache.set(entity.self, of(entity))),
                shareReplay(1)
            ));
        }
        return this.cache.get(url);
    }

    fetchUnits(): Observable<Unit[]> {
        return this.fetchResources(API_UNITS, 'units', Unit);
    }

    fetchUnit(id: number): Observable<Unit> {
        return this.fetchResource('/api/units/' + id, Unit);
    }

    fetchItinerary(id: number): Observable<Itinerary> {
        return this.fetchResource('/api/itineraries/' + id, Itinerary);
    }

    fetchFiles(id: number): Observable<File[]> {
        return this.fetchResources('/api/units/' + id + '/files', 'files', File);
    }

    fetchFile(id: number): Observable<File> {
        return this.fetchResource('/api/file/' + id, File);
    }
}
