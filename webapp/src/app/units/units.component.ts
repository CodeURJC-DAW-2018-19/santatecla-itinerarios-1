import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-units',
  templateUrl: './units.component.html',
  styleUrls: ['./units.component.css']
})
export class UnitsComponent implements OnInit {
  json: string;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get("/api/units").subscribe(data => this.json = JSON.stringify(data));
  }
}
