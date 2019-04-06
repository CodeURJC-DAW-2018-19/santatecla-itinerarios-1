import { Observable } from 'rxjs';
import { File } from './file';
import { Item } from './item';

export class View extends Item {
    id: number;
    itinerary: number;

    get files(): Observable<File[]> {
        return super.lazyLoadResources('forms', File);
    }
}
