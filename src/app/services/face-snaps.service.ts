import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Injectable({
    providedIn: 'root'
})

export class FaceSnapService{
    faceSnaps: FaceSnap[] = [

      {title:"Ronnie Coleman",
      createdDate: new Date(),
      description: "When you hit failure your workout has just begun.",
      imageUrl: "https://p1.storage.canalblog.com/13/78/347404/16571206.gif",
      snaps: 2500,
      location: "NYC"},
    
      {title:"Tom Platz",
      createdDate: new Date(),
      description: "I don’t believe in luck. Luck comes to men of action.",
      imageUrl: "https://www.bodybuilding.com/fun/images/2009/tom_platz_interview2_a.jpg",
      snaps: 505,},

   
      {title: "Chris Bumstead",
      createdDate: new Date(),
      description: "Work so hard you want to quit every day. Be so hard you never fucking quit.",
      imageUrl: "https://cdn.magzter.com/1387309098/1678431962/articles/P2ds29P4y1678881721603/CHRIS-BUMSTEAD-THE-UNDISPUTED-KING-OF-CLASSIC-PHYSIQUE.jpg",
      snaps: 170,},
    ]
}

