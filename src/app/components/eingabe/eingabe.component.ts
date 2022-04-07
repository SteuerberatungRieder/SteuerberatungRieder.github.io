import { Component, Input, OnInit } from '@angular/core';
import { Schieberegler } from 'src/app/models/schieberegler.model';
import { Zufriedenheitsfaktoren } from 'src/app/models/zufriedenheitsfaktoren.module';

@Component({
  selector: 'app-eingabe',
  templateUrl: './eingabe.component.html',
  styleUrls: ['./eingabe.component.scss']
})
export class EingabeComponent implements OnInit {

  @Input() Zufriedenheitsfaktoren!: Zufriedenheitsfaktoren;
  @Input() allSchieberegler!: Schieberegler[];

  constructor() { }

  ngOnInit(): void {
  }

}
