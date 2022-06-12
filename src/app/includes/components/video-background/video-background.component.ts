import { Component, OnInit, Input } from '@angular/core';
import { Background } from 'src/app/config/compagny.info';

@Component({
  selector: 'app-video-background',
  templateUrl: './video-background.component.html',
  styleUrls: ['./video-background.component.scss']
})
export class VideoBackgroundComponent implements OnInit {
  @Input() background: Background;
  @Input() collapseWidth: number = 992;
  @Input() overlayOpacity:number = 0.5;
  canDisplayVideo: boolean = true;
  backgroundStyle: Object;

  constructor() { }

  ngOnInit(): void {
    this.canDisplayVideo = window.innerWidth > this.collapseWidth;
  }

  onResize(event: any): void {
    this.canDisplayVideo = event.target.innerWidth > this.collapseWidth;
  }

}
