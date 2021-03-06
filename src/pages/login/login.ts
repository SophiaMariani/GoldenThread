import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {HomePage} from '../home/home';
import {ProfilePage} from '../profile/profile';
@Component({
  selector: 'page-home',
  templateUrl: 'login.html'
})
export class LoginPage {

  public username: string;
  public password: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}
  
  login () {
    this.navCtrl.push(ProfilePage, {
      username: this.username,
      password: this.password
    });
  }
}
