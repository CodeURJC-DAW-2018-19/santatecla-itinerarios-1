import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { File as Model } from '../model/file';
import { ResourcesService } from '../service/resources.service';
import { Resource } from '../model/resource';

export interface FileDialogData {
    file: Model;
    callback: (Model) => void;
}

@Component({
    selector: 'app-file-dialog',
    templateUrl: './file-dialog.component.html',
})
export class FileDialogComponent {
    images: Resource[] = [];
    file: File;
    disabled = false;

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

    uploadEvent(file: File): void {
        const formData: FormData = new FormData();
        formData.append('multiparts', file, file.name);
        this.disabled = true;
        this.rest.addResourceRelation(this.data.file, formData, 'images')
            .subscribe(() => {
                this.rest.refreshResources(this.data.file.link('images'), Resource, 'images').subscribe(images => {
                    this.images = images;
                    this.disabled = false;
                });
            });
    }
}
