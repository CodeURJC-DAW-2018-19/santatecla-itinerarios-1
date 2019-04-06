import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { File } from '../model/file';
import { ResourcesService } from '../service/resources.service';

export interface FileDialogData {
    file: File;
    rest: ResourcesService;
}

@Component({
    selector: 'app-file-dialog',
    templateUrl: './file-dialog.component.html',
})
export class FileDialogComponent {
    file: File;

    constructor(
        private dialogRef: MatDialogRef<FileDialogComponent>,
        @Inject(MAT_DIALOG_DATA) private data: FileDialogData,
        private rest: ResourcesService
    ) {
        if (data.file) {
            this.file = data.file;
        } else {
            this.file = new File({}, data.rest);
        }
    }

    cancel(): void {
        this.dialogRef.close();
    }

    public save() {
        this.dialogRef.close();
    }
}
