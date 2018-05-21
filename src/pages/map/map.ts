import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
//import { JsonCallProvider } from '../../providers/json-call/json-call';
/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})

export class MapPage {
  /* private tabernak;
   private markers=[];
   private lat: number = 51.678418;
   private lng: number = 7.809007;
   private zoom: number = 2;
  constructor(public navCtrl: NavController,
   public navParams: NavParams,
   private translateService: TranslateService,
   private jsonProvider:JsonCallProvider) {
  }
  private clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }
   private addMarker(i){
    this.markers.push({      
      lat: Number(this.tabernak[i].koordenatuak[0].lat),
      lng: Number(this.tabernak[i].koordenatuak[0].lng),
      //icon:"assets/img/icons/"+icon+".svg",
      labelOptions: {
        /*color: '#CC0000',
        fontFamily: '',
        fontSize: '14px',
        fontWeight: 'bold',*/
       /* text: this.tabernak[i].izena,
       },
      draggable: true
    });

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MapPage');
    this.jsonProvider.getTabernakJson().subscribe(data => {
      this.tabernak=data;
      for (var i = 0; i < this.tabernak.length; i++) {
      	this.addMarker(i);
      }
      console.log(this.tabernak);
  
    });
  }*/
}

