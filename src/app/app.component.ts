import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { FacebookService, InitParams } from "ngx-facebook";
import { faBars, faTimes, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { AppConfig } from './config/app.config';
import { CompagnyInfos } from './config/compagny.info';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  faBars:any = faBars;
  faTimes: any = faTimes;
  faArrowRight: any = faArrowRight;
  compagnyInfos: CompagnyInfos;

  constructor(private appConfig: AppConfig, public translate: TranslateService,
    private facebookService: FacebookService) {
    translate.addLangs(['fr', 'en']);
    translate.setDefaultLang('fr');
    this.translate.use('fr');
    AOS.init({
      disable: 'mobile'
    });
  }
  
  ngOnInit(): void {
    this.compagnyInfos = this.appConfig.getCompagnyInfos();
    //this.initFacebookService();
 
  }
  private initFacebookService(): void {
    const initParams: InitParams = { xfbml: true, version: "v3.2" };
    this.facebookService.init(initParams);
  }

  switchLang(lang: string): void {
    this.translate.use(lang);
  }
  
}
