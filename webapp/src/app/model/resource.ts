import { Observable, of, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { ResourcesService } from '../service/resources.service';

export class Resource {
    private _links;

    constructor(src: any, private rest: ResourcesService) {
        for (const prop in src) {
            if (src.hasOwnProperty(prop)) {
                if (prop === '_links') {
                    this._links = src._links;
                    for (const link in this._links) {
                        if (this._links.hasOwnProperty(link)) {
                            if (this._links[link].href) {
                                const href = this._links[link].href.replace(/\{\?.+/, '');
                                this._links[link] = new URL(href).pathname;
                            }
                        }
                    }
                }
                this[prop] = src[prop];
            }
        }
    }

    lazyLoadResource<T extends Resource>(property: string, Entity: new (raw: any, rest: ResourcesService) => T): Observable<T> {
        return this.rest.fetchResource(this._links[property], Entity);
    }

    lazyLoadResources<T extends Resource>(
        property: string,
        Entity: new (raw: any, rest: ResourcesService) => T,
        ...resources: string[]
    ): Observable<T[]> {
        if (this._links) {
            return this.rest.fetchResources(this._links[property], Entity, property, ...resources);
        } else {
            return throwError('empty');
        }
    }

    public get self(): string {
        return this._links.self;
    }

    public link(resource: string) {
        return this._links[resource];
    }
}
