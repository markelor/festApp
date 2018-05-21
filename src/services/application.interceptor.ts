import { Injectable,Injector } from '@angular/core';
import {ApplicationService} from './application.service';
import {HttpRequest,HttpHandler,HttpEvent,HttpInterceptor} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ApplicationInterceptor implements HttpInterceptor {
  private authService;
  private applicationService;
  constructor(private injector: Injector) {}


   intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
     this.applicationService = this.injector.get(ApplicationService);
    if(request.url==="http://localhost:8080/application/getApplicationEvents/"+this.applicationService.route+"eu"){
        request = request.clone({
          setHeaders: {
            'Content-Type': 'application/json',
            'language':"eu",
            'route':this.applicationService.route
          }
        });     
      }/*else if(request.url==="http://localhost:8080/application/allUserApplications/"+this.applicationService.route+this.localizeService.parser.currentLang){
        request = request.clone({
          setHeaders: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+this.authService.authToken, // Attach token
            'language':this.localizeService.parser.currentLang
          }
        });  
     }*/else{

       
        /*request = request.clone({
          setHeaders: {
            'Content-Type': 'application/json', // Format set to JSON
            'authorization': this.authService.authToken, // Attach token
            'language':this.localizeService.parser.currentLang
          }
        });
        */
     }
   

    return next.handle(request);
  } 
}
