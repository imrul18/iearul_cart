import { Component } from '@angular/core';
import { SessionService } from './app.session';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular_frontend';

  constructor(private sessionService: SessionService) {
    this.sessionService.createSession();
  }
}
