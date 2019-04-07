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

    fetchResources<T extends Resource>(
        url: string,
        Entity: new (raw: any, rest: ResourcesService) => T,
        ...resources: string[]
    ): Observable<T[]> {
        if (!this.cache.get(url)) {
            this.cache.set(url, this.http.get<{ _embedded: {} }>(url).pipe(
                map<{ _embedded: {} }, T[]>(r => {
                    resources = resources.map(resource => {
                        if (r._embedded[resource]) {
                            return r._embedded[resource].map(raw => new Entity(raw, this));
                        } else {
                            return [];
                        }
                    });
                    return [].concat(...resources);
                }),
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

    deleteResourceRelation<T extends Resource>(resource: T, relation: string) {
        return this.http.delete<T>(resource.self + relation);
    }

    addResourceRelation<T extends Resource>(resource: T, relatedResource, relation: string) {
        return this.http.post<T>(resource.self + '/' + relation, this.clone(relatedResource));
    }
}
