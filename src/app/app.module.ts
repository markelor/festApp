import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { LanguagePopoverPage } from '../pages/language-popover/language-popover';
import { EventsPage } from '../pages/events/events';
import { EventDetailsPage } from '../pages/events/event-details/event-details';
import { MapPage } from '../pages/map/map'
import { InfoPage } from '../pages/info/info'
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GroupByPipe } from '../shared/pipes/group-by.pipe';
import { MomentModule } from 'ngx-moment';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ApplicationService } from '../services/application.service';
import { AgmCoreModule } from '@agm/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApplicationInterceptor } from '../services/application.interceptor';
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/lang/', '.json');
}
@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    LanguagePopoverPage,
    EventsPage,
    EventDetailsPage,
    MapPage,
    InfoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    MomentModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAuo-LgEZ3-jX1IizbNUjh8bqgRkeK_D_g'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    LanguagePopoverPage,
    EventsPage,
    EventDetailsPage,
    MapPage,
    InfoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApplicationService,
    GroupByPipe,
     {
      provide: HTTP_INTERCEPTORS,
      useClass: ApplicationInterceptor,
      multi: true
    },
  ]
})
export class AppModule {}
