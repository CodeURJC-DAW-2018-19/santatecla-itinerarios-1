import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { File } from '../model/file';
import { ResourcesService } from '../service/resources.service';
import { FileDialogComponent } from '../file-dialog/file-dialog.component';
import { AuthenticationService } from '../service/authentication.service';

@Component({
    selector: 'app-files',
    templateUrl: './files.component.html',
    styleUrls: ['./files.component.scss']
})
export class FilesComponent implements OnInit {
    unit: number;
    files: File[];

    constructor(
        private rest: ResourcesService,
        private route: ActivatedRoute,
        public dialog: MatDialog,
        private auth: AuthenticationService
    ) {
    }

    ngOnInit(): void {
        this.route.parent.params.subscribe(params => {
            this.unit = Number(params.id);
            this.rest.fetchFiles(this.unit).subscribe(files => {
                this.files = files;
                this.files.forEach(file => file.unit = this.unit);
            });
        });
    }

    deleteFile(file: File) {
        this.rest.deleteResource(file).subscribe(() => {
            this.files = this.files.filter(f => f.id !== file.id);
        });
    }

    createFile(): void {
        const newFile = new File({}, this.rest);
        newFile.unit = this.unit;
        const dialogRef = this.dialog.open(FileDialogComponent, {
            data: {
                file: newFile,
                callback: file => {
                    file.unit = this.unit;
                    this.files.push(file);
                }
            }
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }

    get isAdmin() {
        return this.auth.isAdmin;
    }
}
