import { Component, OnInit } from '@angular/core';
import { SwiperConfigInterface, SwiperConfig } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {
  swiperConfig: SwiperConfigInterface;
  products:any = [{}, {}, {}, {}]

  constructor() { }

  ngOnInit() {
    this.initSwiper();
  }

  initSwiper() {
    this.swiperConfig = {
      a11y: true,
      direction: 'horizontal',
      slidesPerView: 4,
      spaceBetween: 400,
      centeredSlides: true,
      keyboard: true,
      mousewheel: false,
      navigation: true,
      pagination: false,
      parallax: true,
      breakpoints: {
        1123: {
          slidesPerView: 2,
        },
        900: {
          slidesPerView: 1,
          spaceBetween: 1,
          centeredSlides: false,
        },
      }
    }

  }

  showDetail(product: any) {
  }

}
