import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  titleVar = 'Static title';
  log(name) {
    console.log(name);
  }

  displayEmit(emitMsg) {
    console.log('Emittted:' + emitMsg);
  }
}
