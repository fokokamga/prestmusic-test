import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() image:string;
  @Input() title:string;
  @Input() description:string;
  @Input() link:string;
  @Input() linkTitle:string;

  faArrowRight :any = faArrowRight ;
  
  constructor(private router:Router) { }

  ngOnInit() {
  }

  goToLink() {
    this.router.navigate([this.link]);
  }
}
