import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login'; 
import { RegistrationPage } from '../registration/registration';
import { ProfilePage } from '../profile/profile';
import {CharityPage} from '../charity/charity'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  navigateToLogin() {
    this.navCtrl.push(LoginPage);
  }

  navigateToRegistration() {
    this.navCtrl.push(RegistrationPage);
  }
  
  navigateToCharity() {
      this.navCtrl.push(CharityPage)
  
  }
}
