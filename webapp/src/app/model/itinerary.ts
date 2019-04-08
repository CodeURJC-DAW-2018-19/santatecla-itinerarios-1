import { Observable } from 'rxjs';
import { Item } from './item';
import { Unit } from './unit';
export class Itinerary extends Item {
    title: string;

    get items(): Observable<Item[]> {
        return super.lazyLoadResources('items', Item, 'itineraries', 'views');
    }

    get unit(): Observable<Unit> {
        return super.lazyLoadResource('unit', Unit);
    }

    toJSON() {
        return {
            id: this.id,
            title: this.title
        };
    }
}
