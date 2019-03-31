import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ResourcesService} from "../service/resources.service";
import { Form } from '../model/file';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent implements OnInit {
  @Input()
  id : number;
  file: Form;

  constructor(private route: ActivatedRoute,
              private rest: ResourcesService) { 
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.rest.fetchFile(this.id).subscribe(item => this.file = item);
    })
  }

}
