import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppConfig } from './config/app.config';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './includes/modules/material.module';
import { NgxModule } from './includes/modules/ngx.module';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { JwtService } from './services/jwt.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './pages/home/home.component';
import { WorksComponent } from './pages/works/works.component';
import { AboutComponent } from './pages/about/about.component';
import { FooterComponent } from './includes/components/footer/footer.component';
import { ButtonComponent } from './includes/components/button/button.component';
import { CardComponent } from './includes/components/card/card.component';
import { NavbarComponent } from './includes/components/navbar/navbar.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { VideoBackgroundComponent } from './includes/components/video-background/video-background.component';
import { PaylistComponent } from './pages/paylist/paylist.component';
import { LegalNoticeComponent } from './pages/legal-notice/legal-notice.component';
import { TermsOfUseComponent } from './pages/terms-of-use/terms-of-use.component';
import { AccountComponent } from './pages/account/account.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WorksComponent,
    AboutComponent,
    FooterComponent,
    ButtonComponent,
    CardComponent,
    NavbarComponent,
    ContactComponent,
    PaymentComponent,
    VideoBackgroundComponent,
    PaylistComponent,
    LegalNoticeComponent,
    TermsOfUseComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, FormsModule, 
    ReactiveFormsModule, NgxModule, MaterialModule, 
    AppRoutingModule, BrowserAnimationsModule, HttpClientModule, 
    FlexLayoutModule,FontAwesomeModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  entryComponents: [ PaylistComponent ],
  providers: [AppConfig,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtService,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
