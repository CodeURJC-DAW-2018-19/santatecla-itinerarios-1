import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
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

    constructor() {
    }

    ngOnInit() {
    };


	fileRemove() {
		this.remove.emit();
	}
}
