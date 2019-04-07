import { Component, OnInit, Input } from '@angular/core';
import { View } from '../model/view';
import { File } from '../model/file';
import { ResourcesService } from '../service/resources.service';

@Component({
    selector: 'app-view',
    templateUrl: './view.component.html',
    styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

    @Input()
    view: View;

    files: File[];

    units: Array<string> = ['UNIDAD 1', 'UNIDAD2', 'UNIDAD 3'];

    tiles = [
        { text: 'One', cols: 1, rows: 1, color: 'lightblue' },
        { text: 'Two', cols: 1, rows: 1, color: 'lightgreen' },
        { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
        { text: 'Four', cols: 1, rows: 1, color: '#DDBDF1' },
    ];

    constructor(
        private rest: ResourcesService
    ) {
    }

    ngOnInit() {
        this.view = new View(this.view, this.rest);
        this.view.files.subscribe(files => this.files = files);
    }

    addFileReference() {
    }

    deleteFileReference(file: File) {

    }
}
