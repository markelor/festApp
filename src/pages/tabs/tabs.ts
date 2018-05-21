import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EventsPage } from '../events/events';
import { MapPage } from '../map/map'
import { InfoPage } from '../info/info'
/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  tab1Root= EventsPage;
  tab2Root= MapPage;
  tab3Root= InfoPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
