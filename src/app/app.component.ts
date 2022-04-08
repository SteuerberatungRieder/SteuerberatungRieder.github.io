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
    faktor1: 'Liebe',
    faktor2: 'Freude',
    faktor3: 'Leben',
  };

  allSchieberegler: Schieberegler[] = [
    {
      name: 'Ich',
      beschreibung: 'Körper',
      locked: true,
      regler1: 0,
      regler2: 0,
      regler3: 0,
    },
    {
      name: 'Ich',
      beschreibung: 'Seele',
      locked: true,
      regler1: 0,
      regler2: 0,
      regler3: 0,
    },
    {
      name: 'Ich',
      beschreibung: 'Geist',
      locked: true,
      regler1: 0,
      regler2: 0,
      regler3: 0,
    },
    {
      name: 'Familie',
      beschreibung: 'west',
      locked: false,
      regler1: 0,
      regler2: 0,
      regler3: 0,
    },
    {
      name: 'Beruf',
      beschreibung: 'west',
      locked: false,
      regler1: 0,
      regler2: 0,
      regler3: 0,
    },
    {
      name: 'Umwelt',
      beschreibung: 'west',
      locked: false,
      regler1: 0,
      regler2: 0,
      regler3: 0,
    },
  ];

  title = 'SteuerberatungRieder.github.io';

  ZufriedenheitsfaktorenChange(e: any) {}
}
