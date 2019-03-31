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
                            this._links[link] = new URL(this._links[link].href).pathname;
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

    lazyLoadResources<T extends Resource>(property: string, Entity: new (raw: any, rest: ResourcesService) => T): Observable<T[]> {
        if (typeof this._links[property] === 'string') {
            this._links[property] = this.rest.fetchResources(this._links[property], Entity, property)
                .pipe(
                    catchError(err => {
                        this._links[property] = null;
                        return throwError(err);
                    })
                );
        }
        return this._links[property];
    }

    public get self(): string {
        return this._links.self;
    }
}