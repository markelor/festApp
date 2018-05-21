import { Component } from '@angular/core';
import { NavController, NavParams,ViewController } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
/**
 * Generated class for the EventDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-event-details',
  templateUrl: 'event-details.html',
})
export class EventDetailsPage {
  private event;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    private socialSharing: SocialSharing) {
  }
  private share(){
    // Share
    this.socialSharing.share(this.event.description, this.event.title, null,'www.kodekoop.eus').then(() => {
      // Success!
    }).catch(() => {
      // Error!
    });
  }
  
  ionViewDidLoad() {
    this.viewCtrl.setBackButtonText('Back');
    this.event = this.navParams.get('event');
    console.log(this.event); 
  }
  private goBack(){
  	this.navCtrl.pop();
  }

}
