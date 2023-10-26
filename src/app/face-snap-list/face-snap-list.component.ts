import { Component, OnInit, OnDestroy } from '@angular/core';
import { FaceSnap } from '../core/models/face-snap.model';
import { FaceSnapService } from '../core/services/face-snaps.service';
import { Observable, Subject, interval } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';



@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit, OnDestroy {

  faceSnaps$ !: Observable<FaceSnap[]>;
  private destroy$!: Subject<boolean>;

  constructor(private faceSnapService: FaceSnapService){}

  ngOnInit(): void {
    this.destroy$ = new Subject<boolean>;
    this.faceSnaps$ = this.faceSnapService.getAllFaceSnaps();

    interval(1000).pipe(
      takeUntil(this.destroy$),
      tap(console.log)
    ).subscribe();
  }

  ngOnDestroy() {
    this.destroy$.next(true); 
  }
}
