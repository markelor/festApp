import { Component } from '@angular/core';
import { NavController, NavParams,PopoverController } from 'ionic-angular';
import { ApplicationService } from '../../services/application.service';
import { TranslateService } from '@ngx-translate/core';
import { LanguagePopoverPage }from '../language-popover/language-popover';
import { GroupByPipe } from '../../shared/pipes/group-by.pipe';
import { EventDetailsPage } from '../events/event-details/event-details';
import 'moment/locale/eu';
import 'moment/locale/es';
/**
 * Generated class for the EventsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-events',
  templateUrl: 'events.html',
})
export class EventsPage {
	private events;
  private eventsDay;
  private language;
  constructor(
   public navCtrl: NavController,
   public navParams: NavParams,
   private applicationService:ApplicationService,
   private translateService: TranslateService,
   private popoverCtrl:PopoverController,
   private groupByPipe:GroupByPipe
  ) {

  
  }
   private presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(LanguagePopoverPage);
    popover.present({
      ev: myEvent
    });
  }
  
  private onClickEventsDay(index) {
    this.eventsDay=this.events[index].value;
  }
  private onClickEvent(event) {
    this.navCtrl.push(EventDetailsPage,{event: event});
    
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad EventsPage');
     //Language
    this.translateService.setDefaultLang('eu');
    this.translateService.use('eu');
    this.language=this.translateService.currentLang;
    this.applicationService.getApplicationEvents(this.language).subscribe(data => {
      for (var i = 0; i < data.events.length; ++i) {
        data.events[i].keyDay=data.events[i].start.split('T')[0];
      }
      this.events=this.groupByPipe.transform(data.events,'keyDay');
      this.eventsDay=this.events[0].value;
    });
  }

}

