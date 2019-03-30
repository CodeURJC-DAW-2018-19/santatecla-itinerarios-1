import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent implements OnInit {
  @Input()
  id : number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  }

}
