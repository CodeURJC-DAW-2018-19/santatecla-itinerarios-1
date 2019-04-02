import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {CredentialDTO} from "../model/credential-dto";
import {AuthenticationService} from "../service/authentication.service";
import {Location} from '@angular/common';
import {TdDialogService} from "@covalent/core";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-signUp',
  templateUrl: './signUp.component.html',
  styleUrls: ['./signUp.component.css']
})
export class SignUpComponent {
  hide = true;

  constructor(private router:Router){

  }

}



