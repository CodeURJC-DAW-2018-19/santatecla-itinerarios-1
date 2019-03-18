import {isDevMode, NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {UnitsComponent} from "./units/units.component";
import {ErrorComponent} from "./error/error.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'units',
    pathMatch: 'full'
  },
  {path: 'units', component: UnitsComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', component: ErrorComponent, data: {error: 404}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: isDevMode()}),],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
