import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  collectionWithTrackId = [];
  collectionWithOutTrackId = [];

  constructor() {
    this.collectionWithTrackId.push({'id': 1, 'name': 'lakshitha'});
    this.collectionWithTrackId.push({'id': 2, 'name': 'madushan'});
    this.collectionWithTrackId.push({'id': 3, 'name': 'lakshitha madushan'});
    this.collectionWithTrackId.push({'id': 4, 'name': 'madushan lakshitha'});

    this.collectionWithOutTrackId.push({'name': 'lakshitha'});
    this.collectionWithOutTrackId.push({'name': 'madushan'});
    this.collectionWithOutTrackId.push({'name': 'lakshitha madushan'});
    this.collectionWithOutTrackId.push({'name': 'madushan lakshitha'});
  }

  withTrackBy() {
    const temp = [];
    temp.push({'id': 1, 'name': 'lakshitha'});
    temp.push({'id': 2, 'name': 'madushan'});
    temp.push({'id': 3, 'name': 'lakshitha madushan'});
    temp.push({'id': 4, 'name': 'madushan lakshitha'});
    temp.push({'id': 5, 'name': 'madushan madushan'});
    temp.push({'id': 6, 'name': 'lakshitha lakshitha'});
    this.collectionWithTrackId = temp;
  }

  withOutTrackBy() {
    const temp = [];
    temp.push({'name': 'lakshitha'});
    temp.push({'name': 'madushan'});
    temp.push({'name': 'lakshitha madushan'});
    temp.push({'name': 'madushan lakshitha'});
    temp.push({'name': 'madushan madushan'});
    temp.push({'name': 'lakshitha lakshitha'});
    this.collectionWithOutTrackId = temp;
  }

  trackByFn(item) {
    return item.id; // or item.id
  }
}
