import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { File } from '../model/file';
import { ResourcesService } from '../service/resources.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export interface DialogData {
    files: File[];
    rest: ResourcesService;
}
@Component({
    selector: 'app-add-file-dialog',
    templateUrl: './edit-file-dialog.component.html',
})
export class EditFileDialog {
    constructor(public dialogRef: MatDialogRef<EditFileDialog>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

    onNoClick(): void {
        this.dialogRef.close();
    }

    public addFile(title: string, description: string, files: File[], rest: ResourcesService) {
        let id;
        let file = new File('/api/forms/' + id, rest);
        file.description = description;
        file.title = title;
        files.push(file);
        this.dialogRef.close();
    }

}

@Component({
    selector: 'app-files',
    templateUrl: './files.component.html',
    styleUrls: ['./files.component.css']
})
export class FilesComponent implements OnInit {
    files: File[];
    constructor(
        private rest: ResourcesService,
        private route: ActivatedRoute,
        public dialog: MatDialog) {
    }

    ngOnInit(): void {
        this.route.parent.params.subscribe(params => {
            this.rest.fetchFiles(params.id).subscribe(files => {
                this.files = files;
            });
        });
    }

    public deleteFile(file: File): void {
        const index = this.files.indexOf(file);
        if (index > -1) {
            this.files.splice(index, 1);
        }
    }

    public addFile(title: string, description: string) {
        const id = 0; // TODO
        const file = new File('/api/forms/' + id, this.rest);
        file.description = description;
        file.title = title;
        this.files.push(file);
    }


    openDialog(): void {
        const dialogRef = this.dialog.open(EditFileDialog, {
            width: '25%',
            data: { files: this.files, rest: this.rest }
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }
}