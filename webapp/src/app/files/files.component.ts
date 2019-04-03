import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { File } from '../model/file';
import { ResourcesService } from '../service/resources.service';
import { MatDialog } from '@angular/material';
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

    public deleteFile(file: File): void{
        let index = this.files.indexOf(file);
		if(index > -1){
			this.files.splice(index,1);
        }
    }

    public addFile(title: string, description: string) {
        let id ;
        let file = new File('/api/forms/' + id,this.rest);
        file.description= description;
        file.title = title;
		    this.files.push(file);
    }

    openDialog() {
      const dialogRef = this.dialog.open(DialogAddFile);
  
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    }


}

@Component({
  selector: 'app-files',
  templateUrl: 'dialogAddFile.component.html',
})
export class DialogAddFile {}