import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  json: string;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get("/api/units").subscribe(data => this.json = JSON.stringify(data));
  }
}
