import { Component, Input, OnInit } from '@angular/core';
import { Color } from 'src/app/models/color.model';
import { Schieberegler } from 'src/app/models/schieberegler.model';
import { Zufriedenheitsfaktoren } from 'src/app/models/zufriedenheitsfaktoren.module';

@Component({
  selector: 'app-auswertung',
  templateUrl: './auswertung.component.html',
  styleUrls: ['./auswertung.component.scss'],
})
export class AuswertungComponent implements OnInit {
  @Input() Zufriedenheitsfaktoren!: Zufriedenheitsfaktoren;
  @Input() extraRegler!: boolean;
  @Input() allIchSchieberegler!: Schieberegler[];
  @Input() allFamilieSchieberegler!: Schieberegler[];
  @Input() allBerufSchieberegler!: Schieberegler[];
  @Input() allUmweltSchieberegler!: Schieberegler[];
  @Input() allGenerellSchieberegler!: Schieberegler[];
  constructor() {}

  startColor: Color = {
    red: 255,
    green: 0,
    blue: 0,
  };

  middleColor: Color = {
    red: 255,
    green: 208,
    blue: 0,
  };

  endColor: Color = {
    red: 0,
    green: 176,
    blue: 0,
  };

  min = 0;
  max = 300;

  ngOnInit(): void {}
}
