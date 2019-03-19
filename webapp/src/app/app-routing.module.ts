import {isDevMode, NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {UnitsComponent} from "./units/units.component";
import {ErrorComponent} from "./error/error.component";
import {UnitComponent} from "./unit/unit.component";
import {FilesComponent} from "./files/files.component";
import {ItineraryComponent} from "./itinerary/itinerary.component";
import {AccessGuard} from "./guard/access.guard";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'units',
    pathMatch: 'full'
  },
  {path: 'units', component: UnitsComponent},
  {
    path: 'units/:id', component: UnitComponent,
    children: [
      {path: '', redirectTo: 'files', pathMatch: 'full'},
      {path: 'files', component: FilesComponent},
      {path: 'itinerary/:id', component: ItineraryComponent},
    ],
    canActivate: [AccessGuard]
  },
  {path: 'login', component: LoginComponent},
  {path: '**', component: ErrorComponent, data: {error: 404}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: isDevMode()}),],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
