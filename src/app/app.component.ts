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
    faktor1: '',
    faktor2: '',
    faktor3: '',
  };

  allIchSchieberegler: Schieberegler[] = [
    {
      beschreibung: 'Körper',
      locked: true,
      regler1: 0,
      regler2: 0,
      regler3: 0,
    },
    {
      beschreibung: 'Seele',
      locked: true,
      regler1: 0,
      regler2: 0,
      regler3: 0,
    },
    {
      beschreibung: 'Geist',
      locked: true,
      regler1: 0,
      regler2: 0,
      regler3: 0,
    },
  ];

  allFamilieSchieberegler: Schieberegler[] = [
    {
      beschreibung: '',
      locked: false,
      regler1: 0,
      regler2: 0,
      regler3: 0,
    },
  ];

  allBerufSchieberegler: Schieberegler[] = [
    {
      beschreibung: '',
      locked: false,
      regler1: 0,
      regler2: 0,
      regler3: 0,
    },
  ];

  allUmweltSchieberegler: Schieberegler[] = [
    {
      beschreibung: '',
      locked: false,
      regler1: 0,
      regler2: 0,
      regler3: 0,
    },
  ];

  title = 'SteuerberatungRieder.github.io';

  ZufriedenheitsfaktorenChange(e: any) {}
}
