import { Component, OnInit, Input } from '@angular/core';
import { AppConfig } from 'src/app/config/app.config';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() logoColor: string = "default";
  logo: string;
  routerLinkName: string =  "realisations";
  compagnyName: string;

  constructor(private appConfig: AppConfig) { }

  ngOnInit() {
    const compagnyInfos = this.appConfig.getCompagnyInfos();
    this.compagnyName = compagnyInfos.name;
    const logos = compagnyInfos.logos;

    switch (this.logoColor) {
      case 'default':
        this.logo = logos.colored
        break;
      case 'light':
        this.logo = logos.light
        break;
      case 'black':
        this.logo = logos.black
        break;
      default:
        this.logo = logos.colored
    }
  
  }

}
