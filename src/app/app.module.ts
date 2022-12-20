import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {Ng2TelInputModule} from 'ng2-tel-input';
import { ChartComponent } from './chart/chart.component';
import {HttpClientModule} from "@angular/common/http";
import { ApexchartComponent } from './apexchart/apexchart.component'
import { NgApexchartsModule } from 'ng-apexcharts';
import { DateComponent } from './date/date.component';
import { DatePipe } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CheckedComponent } from './checked/checked.component';
import { FormcheckComponent } from './formcheck/formcheck.component';
import { CnfrmpswComponent } from './cnfrmpsw/cnfrmpsw.component';
import { HtmltopdfComponent } from './htmltopdf/htmltopdf.component';
import { QuicklistingComponent } from './quicklisting/quicklisting.component';
import { ImageuploadComponent } from './imageupload/imageupload.component';
import { FeedbackComponent } from './feedback/feedback.component';
import {HeaderComponent} from './header/header.component';
import { NgOtpInputModule } from  'ng-otp-input';
import { OldprojectComponent } from './oldproject/oldproject.component';
import { ScreenshotComponent } from './screenshot/screenshot.component';
import { NgxCaptureModule } from 'ngx-capture';
import { PdftomailComponent } from './pdftomail/pdftomail.component';
import {NgxPrintModule} from 'ngx-print';


@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    ApexchartComponent,
    DateComponent,
    SearchComponent,
    CheckedComponent,
    FormcheckComponent,
    CnfrmpswComponent,
    HtmltopdfComponent,
    QuicklistingComponent,
    ImageuploadComponent,
    FeedbackComponent,
    HeaderComponent,
    OldprojectComponent,
    ScreenshotComponent,
    PdftomailComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2TelInputModule,
    HttpClientModule,
    NgApexchartsModule,
    FormsModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule,
    NgOtpInputModule,
    NgxCaptureModule,
    NgxPrintModule
    
  
  
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
