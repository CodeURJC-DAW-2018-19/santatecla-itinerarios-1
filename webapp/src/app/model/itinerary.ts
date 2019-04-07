import { Observable } from 'rxjs';
import { Item } from './item';
export class Itinerary extends Item {
    title: string;

    get items(): Observable<Item[]> {
        return super.lazyLoadResources('items', Item, 'itineraries', 'views');
    }
}
