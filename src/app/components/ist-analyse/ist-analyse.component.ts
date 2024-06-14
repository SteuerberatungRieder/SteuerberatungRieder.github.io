import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Schieberegler } from 'src/app/models/schieberegler.model';
import { Zufriedenheitsfaktoren } from 'src/app/models/zufriedenheitsfaktoren.module';

@Component({
  selector: 'app-ist-analyse',
  templateUrl: './ist-analyse.component.html',
  styleUrls: ['./ist-analyse.component.scss'],
})
export class IstAnalyseComponent implements OnInit {
  @Input() Zufriedenheitsfaktoren!: Zufriedenheitsfaktoren;
  @Input() extraRegler!: boolean;
  @Input() allIchSchieberegler!: Schieberegler[];
  @Input() allFamilieSchieberegler!: Schieberegler[];
  @Input() allBerufSchieberegler!: Schieberegler[];
  @Input() allUmweltSchieberegler!: Schieberegler[];
  @Input() allGenerellSchieberegler!: Schieberegler[];

  @Output() allIchSchiebereglerChange = new EventEmitter<Schieberegler[]>();
  @Output() allFamilieSchiebereglerChange = new EventEmitter<Schieberegler[]>();
  @Output() allBerufSchiebereglerChange = new EventEmitter<Schieberegler[]>();
  @Output() allUmweltSchiebereglerChange = new EventEmitter<Schieberegler[]>();
  @Output() allGenerellSchiebereglerChange = new EventEmitter<Schieberegler[]>();

  constructor() {}

  ngOnInit(): void {}

  SchiebereglerChangeFunc(e: number): number {
    setTimeout(() => {
      this.updateAllSchieberegler();
    }, 1);
    return e;
  }

  updateAllSchieberegler() {
    this.allIchSchiebereglerChange.emit(this.allIchSchieberegler);
    this.allFamilieSchiebereglerChange.emit(this.allFamilieSchieberegler);
    this.allBerufSchiebereglerChange.emit(this.allBerufSchieberegler);
    this.allUmweltSchiebereglerChange.emit(this.allUmweltSchieberegler);
    this.allGenerellSchiebereglerChange.emit(this.allGenerellSchieberegler);
  }
}
