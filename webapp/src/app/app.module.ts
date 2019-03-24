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
  CovalentCommonModule,
  CovalentDataTableModule,
  CovalentDialogsModule,
  CovalentExpansionPanelModule,
  CovalentJsonFormatterModule,
  CovalentLayoutModule,
  CovalentLoadingModule,
  CovalentMediaModule,
  CovalentMenuModule,
  CovalentMessageModule,
  CovalentNotificationsModule,
  CovalentPagingModule,
  CovalentSearchModule,
  CovalentStepsModule,
  CovalentTabSelectModule
} from "@covalent/core";
import {ErrorComponent} from './error/error.component';
import {AppRoutingModule} from "./app-routing.module";
import {SubItineraryComponent} from './sub-itinerary/sub-itinerary.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CredentialService} from "./service/credential.service";
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatDatepickerModule,
  MatDialogModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule
} from "@angular/material";
import {CommonModule} from "@angular/common";
import {NgxChartsModule} from "@swimlane/ngx-charts";
import {ChartComponent} from './chart/chart.component';


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
    SubItineraryComponent,
    NavBarComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,

    AppRoutingModule,

    /** Material Modules */
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule,
    MatInputModule,
    MatButtonToggleModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatDialogModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatTabsModule,
    MatSidenavModule,
    MatTooltipModule,
    MatRippleModule,
    MatRadioModule,
    MatGridListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSliderModule,
    MatAutocompleteModule,
    MatNativeDateModule,

    /** Covalent Modules */
    CovalentCommonModule,
    CovalentLayoutModule,
    CovalentMediaModule,
    CovalentExpansionPanelModule,
    CovalentStepsModule,
    CovalentDialogsModule,
    CovalentLoadingModule,
    CovalentSearchModule,
    CovalentPagingModule,
    CovalentNotificationsModule,
    CovalentMenuModule,
    CovalentDataTableModule,
    CovalentMessageModule,
    // (optional) Additional Covalent Modules imports
    CovalentHttpModule.forRoot(),
    CovalentHighlightModule,
    CovalentMarkdownModule,
    CovalentDynamicFormsModule,
    CovalentJsonFormatterModule,
    CovalentDialogsModule,
    CovalentTabSelectModule,
    CovalentSearchModule,
    /** Additional **/
    NgxChartsModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
    deps: [CredentialService]
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
