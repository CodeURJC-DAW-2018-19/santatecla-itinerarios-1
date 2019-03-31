import { Itinerary } from './itinerary';
import { Resource } from './resource';
import { Observable } from 'rxjs';

export class Unit extends Resource {
    id: number;
    title: string;

    get itineraries(): Observable<Itinerary[]> {
        return super.lazyLoadResources('itineraries', Itinerary);
    }
}
