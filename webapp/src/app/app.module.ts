import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthInterceptor} from "./interceptor/AuthInterceptor";
import {UnitsComponent} from './units/units.component';
import {ViewComponent} from './view/view.component';
import {FileComponent} from './file/file.component';
import {FilesComponent} from './files/files.component';
import {LoginComponent} from './login/login.component';
import {ItineraryComponent} from './itinerary/itinerary.component';
import {UnitComponent} from './unit/unit.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CovalentDynamicFormsModule} from "@covalent/dynamic-forms";
import {CovalentMarkdownModule} from "@covalent/markdown";
import {CovalentHighlightModule} from "@covalent/highlight";
import {CovalentHttpModule} from "@covalent/http";
import {CovalentLayoutModule, CovalentStepsModule} from "@covalent/core";

@NgModule({
  declarations: [
    AppComponent,
    UnitsComponent,
    ViewComponent,
    FileComponent,
    FilesComponent,
    LoginComponent,
    ItineraryComponent,
    UnitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CovalentLayoutModule,
    CovalentStepsModule,
    // (optional) Additional Covalent Modules imports
    CovalentHttpModule.forRoot(),
    CovalentHighlightModule,
    CovalentMarkdownModule,
    CovalentDynamicFormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
