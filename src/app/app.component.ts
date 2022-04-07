import { Component } from '@angular/core';
import { Schieberegler } from './models/schieberegler.model';
import { Zufriedenheitsfaktoren } from './models/zufriedenheitsfaktoren.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  Zufriedenheitsfaktoren: Zufriedenheitsfaktoren = {
    faktor1: 'test1',
    faktor2: 'test3',
    faktor3: 'test5',
  };

  allSchieberegler: Schieberegler[] = [
    {
      name: 'test',
      beschreibung: 'west',
      locked: false,
      regler1: 20,
      regler2: 1,
      regler3: 1,
    },
    {
      name: 'test',
      beschreibung: 'west',
      locked: false,
      regler1: 20,
      regler2: 1,
      regler3: 1,
    },
    {
      name: 'test',
      beschreibung: 'west',
      locked: false,
      regler1: 20,
      regler2: 1,
      regler3: 1,
    },
  ];

  title = 'SteuerberatungRieder.github.io';
}
