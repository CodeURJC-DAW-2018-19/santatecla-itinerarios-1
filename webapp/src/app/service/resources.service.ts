import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, tap, shareReplay, mergeMap } from 'rxjs/operators';
import { Resource } from '../model/resource';
import { Unit } from '../model/unit';
import { API_UNITS } from '../config';
import { Itinerary } from '../model/itinerary';
import { File } from '../model/file';
import { View } from '../model/view';

@Injectable({
    providedIn: 'root'
})
export class ResourcesService {
    private cache: Map<string, Observable<any>> = new Map();

    constructor(private http: HttpClient) {
    }

    private pipe<T extends Resource>(raw: any, Entity: new (raw: any, rest: ResourcesService) => T) {
        const entity = new Entity(raw, this);
        this.cache.set(entity.self, of(entity));
        return entity;
    }

    refreshResources<T extends Resource>(
        url: string,
        Entity: new (raw: any, rest: ResourcesService) => T,
        ...resources: string[]
    ): Observable<T[]> {
        this.cache.set(url, this.http.get<{ _embedded: {} }>(url).pipe(
            map<{ _embedded: {} }, T[]>(r => {
                resources = resources.map(resource => r._embedded[resource] || []);
                return [].concat(...resources);
            }),
            map(entities => entities.map(entity => this.pipe(entity, Entity))),
            shareReplay(1)
        ));
        return this.cache.get(url);
    }

    refreshResource<T extends Resource>(url: string, Entity: new (raw: any, rest: ResourcesService) => T) {
        this.cache.set(url, this.http.get<T>(url).pipe(
            map(raw => this.pipe(raw, Entity)),
            shareReplay(1)
        ));
    }

    fetchResources<T extends Resource>(
        url: string,
        Entity: new (raw: any, rest: ResourcesService) => T,
        ...resources: string[]
    ): Observable<T[]> {
        if (!this.cache.get(url)) {
            return this.refreshResources(url, Entity, ...resources);
        }
        return this.cache.get(url);
    }

    fetchResource<T extends Resource>(url: string, Entity: new (raw: any, rest: ResourcesService) => T): Observable<T> {
        if (!this.cache.get(url)) {
            this.refreshResource(url, Entity);
        }
        return this.cache.get(url);
    }

    deleteResource<T extends Resource>(resource: T): Observable<T> {
        return this.http.delete<T>(resource.self);
    }

    fetchUnits(): Observable<Unit[]> {
        return this.fetchResources(API_UNITS, Unit, 'units');
    }

    fetchUnit(id: number): Observable<Unit> {
        return this.fetchResource('/api/units/' + id, Unit);
    }

    fetchItinerary(id: number): Observable<Itinerary> {
        return this.fetchResource('/api/itineraries/' + id, Itinerary);
    }

    fetchFiles(id: number): Observable<File[]> {
        return this.fetchResources('/api/units/' + id + '/forms', File, 'forms');
    }

    fetchFile(id: number): Observable<File> {
        return this.fetchResource('/api/forms/' + id, File);
    }

    saveFile(file: File): Observable<File> {
        return this.http.post<File>('/api/forms', file).pipe(mergeMap(file => this.fetchFile(file.id)));
    }

    private clone(entity) {
        const cloned = { ...entity };
        delete cloned['rest'];
        return cloned;
    }

    saveView(view: View): Observable<View> {
        return this.http.post<File>('/api/views', this.clone(view))
            .pipe(mergeMap(view => this.fetchResource('/api/views/' + view.id, View)));
    }

    saveUnit(unit: Unit): Observable<Unit> {
        return this.http.post<File>('/api/units', this.clone(unit))
            .pipe(mergeMap(unit => this.fetchResource('/api/units/' + unit.id, Unit)));
    }

    saveItinerary(itinerary): Observable<Itinerary> {
        return this.http.post<Itinerary>('/api/itineraries', this.clone(itinerary))
            .pipe(mergeMap(itinerary => this.fetchResource('/api/itineraries/' + itinerary.id, Itinerary)));
    }

    deleteResourceRelation<T extends Resource>(resource: T, relation: string) {
        return this.http.delete<T>(resource.self + relation);
    }

    addResourceRelation<T extends Resource>(resource: T, relatedResource, relation: string) {
        return this.http.post<T>(resource.self + '/' + relation, this.clone(relatedResource));
    }
}
