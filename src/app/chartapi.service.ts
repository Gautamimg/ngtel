import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ChartapiService {
  constructor(private service: HttpClient) {}



  chart_api(url:any) {
    return this.service.get('https://ares-dev-frontend.azure-api.net'+url, {headers:new HttpHeaders().set('Ocp-Apim-Subscription-Key', 'e473aa6695d14c94a43d3bfe06cdf501')});
  }
  
  post(url:any,data:any){
    return this.service.post('https://www.team.propira.com/demotesting/api'+url,data)
   }
   get(url:any){
    return this.service.get("https://restcountries.com/v3.1/name/"+url+"?fullText=true");
   }

   get_api(url:any){
    return this.service.get("http://13.233.53.77/tp_corpkanpur/api/v3/"+url);
   }
   
  
}
