import { Component } from '@angular/core';
import { NavController, NavParams,ViewController} from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';

/**
 * Generated class for the LanguagePopoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-language-popover',
  templateUrl: 'language-popover.html',
})
export class LanguagePopoverPage {
  private languages: any[] = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private translateService: TranslateService,
    public viewCtrl: ViewController
  ) {
  	  this.languages = [
      {
        value: 'eu'
      },
      {
        value: 'es'
      }
    ];
  }
	choose(lang) {
    this.translateService.use(lang);
     this.viewCtrl.dismiss();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LanguagePopoverPage');
  }

}
