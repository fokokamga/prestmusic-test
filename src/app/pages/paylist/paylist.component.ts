import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-paylist',
  templateUrl: './paylist.component.html',
  styleUrls: ['./paylist.component.scss']
})
export class PaylistComponent implements OnInit {
  safeUrl: any;
  faTimesCircle = faTimesCircle;
  playlistKey: string;
  

  constructor(private dialogRef: MatDialogRef<PaylistComponent>,
    @Inject(MAT_DIALOG_DATA) data: any,
    private sanitizer: DomSanitizer) {
      this.playlistKey = data;
  }

  ngOnInit(): void {
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/playlist?list="+this.playlistKey+"&autoplay=1&showinfo=0");
  }
 
  close(): void {
    this.dialogRef.close('Play Youtube Video Closed');
  }

}
