import {Component, OnInit} from '@angular/core';
import {ResourcesService} from "../service/resources.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.css']
})
export class FilesComponent implements OnInit {
  files: File[];

  constructor(private rest: ResourcesService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.parent.params.subscribe(params => {
      this.rest.fetchFilesSummary(params['id']).subscribe(files => {
        this.files = files;
      });
    });

  }

}
