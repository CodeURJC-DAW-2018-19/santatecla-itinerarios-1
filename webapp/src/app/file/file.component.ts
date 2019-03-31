import { Component, Input, OnInit } from '@angular/core';
import { File } from '../model/file';

@Component({
    selector: 'app-file',
    templateUrl: './file.component.html',
    styleUrls: ['./file.component.css']
})
export class FileComponent implements OnInit {
    @Input()
    file: File;

    constructor() {
    }

    ngOnInit() {
    }
}
