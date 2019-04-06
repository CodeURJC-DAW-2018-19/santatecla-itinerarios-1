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
        const dialogRef = this.dialog.open(FileDialogComponent, {
            data: { files: this.files, rest: this.rest }
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }
}
