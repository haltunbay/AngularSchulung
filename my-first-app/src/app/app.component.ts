import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Monkey Books Store';
  titleVar = 'Static title';

  constructor(private location: Location) {}

  log(name) {
    console.log(name);
  }

  displayEmit(emitMsg) {
    console.log('Emittted:' + emitMsg);
  }

  goBack() {
    // window.history.back();
    this.location.back();
  }
}
