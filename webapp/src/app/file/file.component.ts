import { Component, Input, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { File } from '../model/file';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';

export interface DialogData {
    file: File;
    title: string;
    description:string;
}

@Component({
    selector: 'app-file',
    templateUrl: './file.component.html',
    styleUrls: ['./file.component.css']
})
export class FileComponent implements OnInit {
    @Input()
    file: File;

    @Output()
	private remove = new EventEmitter<any>();

    constructor(public dialog: MatDialog) {
    }

    ngOnInit() {
    };


	fileRemove() {
		this.remove.emit();
    }
    
    openDialogEdit(): void {
        const dialogRef = this.dialog.open(EditDialog, { 
            width: '25%',
            data:{file: this.file, title: this.file.title, description: this.file.description}});

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }
}

@Component({
    selector: 'app-edit-dialog',
    templateUrl: './edit-dialog.component.html',
})
export class EditDialog {
    constructor(public dialogRef: MatDialogRef<EditDialog>,
                @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

    onNoClickEdit(): void {
        this.dialogRef.close();
    }

    public editFile(title: string, description: string, file: File) {
        file.description = description;
        file.title = title;
        this.dialogRef.close();
    }

}
