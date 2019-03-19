import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
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
import {
  CovalentJsonFormatterModule,
  CovalentLayoutModule, CovalentSearchModule,
  CovalentStepsModule,
  CovalentTabSelectModule
} from "@covalent/core";
import {ErrorComponent} from './error/error.component';
import {AppRoutingModule} from "./app-routing.module";
import {SubItineraryComponent} from './sub-itinerary/sub-itinerary.component';
import {FormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material";

@NgModule({
  declarations: [
    AppComponent,
    UnitsComponent,
    ViewComponent,
    FileComponent,
    FilesComponent,
    LoginComponent,
    ItineraryComponent,
    UnitComponent,
    ErrorComponent,
    SubItineraryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CovalentLayoutModule,
    CovalentStepsModule,
    // (optional) Additional Covalent Modules imports
    CovalentHttpModule.forRoot(),
    CovalentHighlightModule,
    CovalentMarkdownModule,
    CovalentDynamicFormsModule,
    CovalentJsonFormatterModule,
    CovalentSearchModule,
    CovalentTabSelectModule,
    MatCardModule
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
