import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {HomePage} from '../home/home';
import {ProfilePage} from'../profile/profile';
@Component({
  selector: 'page-home',
  templateUrl: 'registration.html'
})
export class RegistrationPage {
  
  constructor(public navCtrl: NavController) {

  }

  navigateToProfile() {
    this.navCtrl.push(ProfilePage);
}
}