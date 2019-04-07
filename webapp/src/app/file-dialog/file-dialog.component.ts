import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { File } from '../model/file';
import { ResourcesService } from '../service/resources.service';
import { Resource } from '../model/resource';

export interface FileDialogData {
    file: File;
    callback: (File) => void;
}

@Component({
    selector: 'app-file-dialog',
    templateUrl: './file-dialog.component.html',
})
export class FileDialogComponent {
    images: Resource[] = [];

    constructor(
        private dialogRef: MatDialogRef<FileDialogComponent>,
        private rest: ResourcesService,
        @Inject(MAT_DIALOG_DATA) public data: FileDialogData
    ) {
        data.file.images.subscribe(images => this.images = images);
    }

    cancel(): void {
        this.dialogRef.close();
    }

    save() {
        this.rest.saveFile(this.data.file).subscribe(file => {
            this.data.callback(file);
            this.dialogRef.close();
        });
    }
}
