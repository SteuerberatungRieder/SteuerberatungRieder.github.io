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

  allGenerellSchieberegler: Schieberegler[] = [
    {
      beschreibung: '',
      locked: false,
      regler1: 0,
      regler2: 0,
      regler3: 0,
    },
  ];

  title = 'SteuerberatungRieder.github.io';

  extraRegler = false;

  ZufriedenheitsfaktorenChange(e: any) {}

  constructor() {
    const queryParams = new URLSearchParams(window.location.search);

    // To get a specific query parameter value
    const paramValue = queryParams.get('extraRegler');
    this.extraRegler = paramValue != null;
    if (!this.extraRegler) {
      throw new Error('Have fun :D, please fix');
    }
  }
}
