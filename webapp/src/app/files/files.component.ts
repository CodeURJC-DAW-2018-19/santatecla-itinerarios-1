import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { File } from '../model/file';
import { ResourcesService } from '../service/resources.service';
import { FileDialogComponent } from './file.dialog.component';

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
        public dialog: MatDialog) {
    }

    ngOnInit(): void {
        this.route.parent.params.subscribe(params => {
            this.unit = Number(params.id);
            this.rest.fetchFiles(this.unit).subscribe(files => {
                this.files = files;
            });
        });
    }

    createFile(): void {
        const dialogRef = this.dialog.open(FileDialogComponent, {
            data: {
                unit: this.unit,
                callback: file => this.files.push(file)
            }
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }

    editFile(file: File): void {
        const dialogRef = this.dialog.open(FileDialogComponent, {
            data: {
                file,
                unit: this.unit,
                callback: file => {
                    for (let i = 0; i < this.files.length; i++) {
                        if (file.id === this.files[i].id) {
                            this.files[i] = file;
                        }
                    }
                }
            }
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }
}
