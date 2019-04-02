import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    constructor(
        private _iconRegistry: MatIconRegistry,
        private _domSanitizer: DomSanitizer
    ) {
    }

    ngOnInit(): void {
        this._iconRegistry.addSvgIconInNamespace('assets', 'github',
            this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/github.svg'));
        this._iconRegistry.addSvgIconInNamespace('assets', 'logo',
            this._domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/logo.svg'));
    }
}
