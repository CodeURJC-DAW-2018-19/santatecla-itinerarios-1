import { Component, OnInit, Input } from '@angular/core';
import { View } from '../model/view';

@Component({
    selector: 'app-view',
    templateUrl: './view.component.html',
    styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
    @Input()
    view: View;

    units: Array<string>=['UNIDAD 1','UNIDAD2','UNIDAD 3'];
    files: Array<string>=['FICHA 1','FICHA2'];


    constructor() { }

    ngOnInit() {
    }
}
