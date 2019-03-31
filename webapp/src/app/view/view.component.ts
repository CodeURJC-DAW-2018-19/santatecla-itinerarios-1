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

    constructor() { }

    ngOnInit() {
    }
}
