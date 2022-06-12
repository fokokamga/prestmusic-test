import { Component, OnInit, HostListener } from '@angular/core';
import { faBars, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { AppComponent } from 'src/app/app.component';
import { Background } from 'src/app/config/compagny.info';
import { ServiceForm } from 'src/app/models/ServiceForm.model ';
import { MatDialog } from '@angular/material';
import { PaylistComponent } from '../paylist/paylist.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  faBars:any = faBars;
  faArrowRight : any = faArrowRight;
  background: Background;
  services: ServiceForm[];
  logos: Object;

  constructor(private appComponent: AppComponent, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.background = this.appComponent.compagnyInfos.background;
    this.appComponent.translate.get("services").subscribe(
      services => { this.services = services }
    );
  }

  togglePlaylist(link: string): void {
    const dialogRef = this.dialog.open(PaylistComponent, {
      width: '800px',
      data: link,
      panelClass: 'cust-mat-dialog',
      backdropClass:'cust-mat-dialog-backdrop',
    });
    dialogRef.afterClosed().subscribe(result => {})
  }
}
