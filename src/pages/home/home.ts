import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import { FirebaseProvider } from './../../providers/firebase/firebase';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  busStops: FirebaseListObservable<any[]>;
  newStop = '';
  constructor(public navCtrl: NavController, public firebaseProvider: FirebaseProvider) {
    this.busStops = this.firebaseProvider.getBusStops();
  }

  addStop() {
    console.log("add stop" + this.newStop);
    this.firebaseProvider.addStop(this.newStop);
  }

  removeStop(id) {
    this.firebaseProvider.removeStop(id);
  }
}
