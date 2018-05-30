import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CharitydeatilsPage } from '../charitydeatils/charitydeatils';

/**
 * Generated class for the CharityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-home',
  templateUrl: 'charity.html',
})
export class CharityPage {
  items = [
    {name:'Bond',description: "Purpose: Bond unites and supports a diverse network of over 450 civil society organisations and allies to help eradicate global poverty, inequality and injustice. By helping our members adapt to an ever-changing environment, we enable civil society to create a more just and sustainable world. We work to influence governments and policy-makers, develop the skills of people in the sector, build organisational capacity and share expertise.", goal_amount:"Goal amount: ZAR56,000"},
    {name:'UNICEF',description: "Purpose: UNICEF works in 190 countries and territories to save children’s lives, to defend their rights, and to help them fulfil their potential. And we never give up. UNICEF for every child.", goal_amount:"Goal Amount: ZAR56,000"},
    {name:'CARE', description: "Purpose: CARE’s commitment to women’s empowerment and gender equality is based on decades of expertise in dozens of countries and in every development sector. We see gender as a cross-cutting issue that we address in every program to make an equal world free of poverty.", goal_amount:"Goal Amount: ZAR56,000"},
    {name:'International Rhio Fund',description: "Purpose: The International Rhino Fund have been funding and operating rhino conservation programs for the last 25 years to ensure the survival of rhinos. Their major operations are in Africa and Asia, where most of the rhino species live. They have their horns in to stop poachers!", goal_amount:"Goal Amount: ZAR56,000"},
    {name:'Save The Children',description: "Purpose: Save the Children strives to ensure that children in the United States and across the world are protected from harm, have access to medical care, and have education available to them. These goals are supported through a wide range of programs focused on education, emergency response, health and nutrition, HIV and AIDS, U.S. disaster response, and child protection.",goal_amount:"Goal Amount: ZAR56,000"}
  ];

  constructor(public navCtrl: NavController) {

  }

  itemSelected(item: string) {
    console.log("Selected Item", item);
    this.navCtrl.push(CharitydeatilsPage, {
      item: item
    })
  }
}

