import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventsPage } from './events';
import { TranslateModule } from '@ngx-translate/core';
import { MomentModule } from 'ngx-moment';
import { SharedModule } from '../../shared/shared.module';
import { GroupByPipe } from '../../shared/pipes/group-by.pipe';
@NgModule({
  declarations: [
    EventsPage,
  ],
  imports: [
    IonicPageModule.forChild(EventsPage),
    TranslateModule.forChild(),
    MomentModule,
    SharedModule
  ],
  providers:[GroupByPipe]
})
export class EventsPageModule {}
