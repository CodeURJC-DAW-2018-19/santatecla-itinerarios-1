import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material';
import { File } from '../model/file';

@Component({
    selector: 'app-file',
    templateUrl: './file.component.html',
    styleUrls: ['./file.component.css']
})
export class FileComponent implements OnInit {
    @Input()
    file: File;

    @Output()
    private remove = new EventEmitter<any>();

    @Output()
    private edit = new EventEmitter<any>();

    constructor(public dialog: MatDialog) {
    }

    ngOnInit() {
    }


    removeFile() {
        this.remove.emit();
    }

    editFile() {
        this.edit.emit();
    }
}
