import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material';
import { File } from '../model/file';
import { FileDialogComponent } from '../file-dialog/file-dialog.component';

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

    constructor(public dialog: MatDialog) {
    }

    ngOnInit() {
    }


    removeFile() {
        this.remove.emit();
    }

    editFile(): void {
        const dialogRef = this.dialog.open(FileDialogComponent, {
            data: {
                file: this.file,
                callback: (f) => {
                    this.file = f;
                }
            }
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }
}
