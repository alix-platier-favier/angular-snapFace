import { FaceSnap } from '../../../core/models/face-snap.model';
import { Observable, tap } from 'rxjs';
import { Component, OnInit, Input } from '@angular/core';
import { FaceSnapService } from '../../../core/services/face-snaps.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})

export class SingleFaceSnapComponent implements OnInit{

  @Input() FaceSnap!: FaceSnap;
  faceSnap$!: Observable<FaceSnap>;
  buttonText !: string;

  constructor(private faceSnapsService: FaceSnapService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.buttonText = "Yeah Buddy !";
    const faceSnapId = +this.route.snapshot.params['id'];
    this.faceSnap$ = this.faceSnapsService.getFaceSnapById(faceSnapId);
  }

  onSnap(faceSnapId: number) {
    if (this.buttonText === 'Yeah Buddy !') {
        this.faceSnap$ = this.faceSnapsService.snapFaceSnapById(faceSnapId, 'snap').pipe(
          tap(() => this.buttonText = 'Oops, Light Weight !')
        );
    } else {
        this.faceSnap$ = this.faceSnapsService.snapFaceSnapById(faceSnapId, 'unsnap').pipe(
          tap(() => this.buttonText = 'Yeah Buddy !')
        );
    }
  } 
}

