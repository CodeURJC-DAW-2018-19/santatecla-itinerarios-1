import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { File } from '../model/file';
import { ResourcesService } from '../service/resources.service';
@Component({
    selector: 'app-files',
    templateUrl: './files.component.html',
    styleUrls: ['./files.component.css']
})
export class FilesComponent implements OnInit {
    files: File[];

    constructor(
        private rest: ResourcesService,
        private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.route.parent.params.subscribe(params => {
            this.rest.fetchFiles(params.id).subscribe(files => {
                this.files = files;
            });
        });
    }

    public deleteFile(file: File): void{
        let index = this.files.indexOf(file);
		if(index > -1){
			this.files.splice(index,1);
		}
    }
}
