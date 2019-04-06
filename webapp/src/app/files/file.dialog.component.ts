import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { File } from '../model/file';
import { ResourcesService } from '../service/resources.service';

export interface FileDialogData {
    file: File;
    unit: number;
    callback: (File) => void;
}

@Component({
    selector: 'app-file-dialog',
    templateUrl: './file-dialog.component.html',
})
export class FileDialogComponent {
    constructor(
        private dialogRef: MatDialogRef<FileDialogComponent>,
        private rest: ResourcesService,
        @Inject(MAT_DIALOG_DATA) public data: FileDialogData
    ) {
        if (!data.file) {
            data.file = new File({}, this.rest);
        }
        data.file.unit = data.unit;
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
