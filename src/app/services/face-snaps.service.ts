import { HttpClientModule } from '@angular/common/http';
import { FaceSnap } from './../models/face-snap.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class FaceSnapService{

  constructor(private http: HttpClient) { }

    faceSnaps: FaceSnap[] = [

      {id: 1,
      title:"Ronnie Coleman",
      createdDate: new Date(),
      description: "When you hit failure your workout has just begun.",
      imageUrl: "https://p1.storage.canalblog.com/13/78/347404/16571206.gif",
      snaps: 2500,
      location: "NYC"},
    
      {id: 2,
      title:"Tom Platz",
      createdDate: new Date(),
      description: "I don’t believe in luck. Luck comes to men of action.",
      imageUrl: "https://www.bodybuilding.com/fun/images/2009/tom_platz_interview2_a.jpg",
      snaps: 505,},

   
      {id: 3,
      title: "Chris Bumstead",
      createdDate: new Date(),
      description: "Work so hard you want to quit every day. Be so hard you never fucking quit.",
      imageUrl: "https://cdn.magzter.com/1387309098/1678431962/articles/P2ds29P4y1678881721603/CHRIS-BUMSTEAD-THE-UNDISPUTED-KING-OF-CLASSIC-PHYSIQUE.jpg",
      snaps: 170,},

      {id: 4,
        title: "Dino Ramon",
        createdDate: new Date(),
        description: "Fitness isn't about being better than someone else. It's about being better than you used to be.",
        imageUrl: "https://tikkaykhan.com/wp-content/uploads/2023/03/Ramon-Dino-Mr-Olympia.jpg",
        snaps: 1700,},
    ];

    getAllFaceSnaps(): FaceSnap[] {
      return this.faceSnaps;
    }

    getFaceSnapById(faceSnapId: number): FaceSnap {
      const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
      if(!faceSnap){
        throw new Error('FaceSnap not found!');
      } else {
        return faceSnap;
      }
    }

    snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void {
      const faceSnap = this.getFaceSnapById(faceSnapId);
      snapType === "snap" ? faceSnap.snaps++ : faceSnap.snaps--;
}

    addFaceSnap(formValues: {title: string, description: string, imageUrl: string, location?: string}): void {
      const faceSnap: FaceSnap = {
        ...formValues,
        createdDate: new Date(),
        snaps: 0,
        id: this.faceSnaps[this.faceSnaps.length - 1].id + 1,
      };
      this.faceSnaps.push(faceSnap);
    }
}

