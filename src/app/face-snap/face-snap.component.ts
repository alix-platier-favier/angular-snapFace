import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../core/models/face-snap.model';
import { FaceSnapService } from '../core/services/face-snaps.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit{
  @Input() faceSnap!: FaceSnap;
  buttonText !: string;

  constructor(private faceSnapsService: FaceSnapService,
              private router: Router) { }

  ngOnInit() {
    this.buttonText = "Yeah Buddy !"
  }

  onSnap() {
    if(this.buttonText === "Yeah Buddy !"){
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.buttonText = "Oops, Light Weight !";
    }else{
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
      this.buttonText = "Yeah Buddy !";
    }
  }

  onViewFaceSnap() {
    this.router.navigateByUrl('/facesnaps/' + this.faceSnap.id);
}
}
