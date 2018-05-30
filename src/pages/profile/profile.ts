import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {RegistrationPage} from '../registration/registration';


@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
  public username: string;
  public password: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) 
  {
    this.username = this.navParams.get("username");
    this.password = this.navParams.get("password");

  }
}
