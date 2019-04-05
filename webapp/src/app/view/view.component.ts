import {Component, OnInit, Input} from '@angular/core';
import {View} from '../model/view';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  @Input()
  view: View;

  units: Array<string> = ['UNIDAD 1', 'UNIDAD2', 'UNIDAD 3'];
  files: Array<string> = ['FICHA 1', 'FICHA2'];

  tiles = [
    {text: 'One', cols: 1, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 1, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 1, rows: 1, color: '#DDBDF1'},
  ];

  constructor() {
  }

  ngOnInit() {
  }

  addFileReference() {
  }
}
