import { Component, Input, OnInit } from '@angular/core';
import { Schieberegler } from 'src/app/models/schieberegler.model';
import { Zufriedenheitsfaktoren } from 'src/app/models/zufriedenheitsfaktoren.module';

@Component({
  selector: 'app-ist-analyse',
  templateUrl: './ist-analyse.component.html',
  styleUrls: ['./ist-analyse.component.scss'],
})
export class IstAnalyseComponent implements OnInit {
  @Input() Zufriedenheitsfaktoren!: Zufriedenheitsfaktoren;
  @Input() allSchieberegler!: Schieberegler[];
  constructor() {}

  ngOnInit(): void {}
}
