import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Schieberegler } from 'src/app/models/schieberegler.model';
import { Zufriedenheitsfaktoren } from 'src/app/models/zufriedenheitsfaktoren.module';

@Component({
  selector: 'app-eingabe',
  templateUrl: './eingabe.component.html',
  styleUrls: ['./eingabe.component.scss'],
})
export class EingabeComponent implements OnInit {
  @Input() Zufriedenheitsfaktoren!: Zufriedenheitsfaktoren;
  @Input() allIchSchieberegler!: Schieberegler[];
  @Input() allFamilieSchieberegler!: Schieberegler[];
  @Input() allBerufSchieberegler!: Schieberegler[];
  @Input() allUmweltSchieberegler!: Schieberegler[];

  @Output() ZufriedenheitsfaktorenChange =
    new EventEmitter<Zufriedenheitsfaktoren>();

  @Output() allIchSchiebereglerChange = new EventEmitter<Schieberegler[]>();
  @Output() allFamilieSchiebereglerChange = new EventEmitter<Schieberegler[]>();
  @Output() allBerufSchiebereglerChange = new EventEmitter<Schieberegler[]>();
  @Output() allUmweltSchiebereglerChange = new EventEmitter<Schieberegler[]>();

  constructor() {}

  ngOnInit(): void {}

  ZufriedenheitsfaktorenChange1(e: any) {
    this.Zufriedenheitsfaktoren.faktor1 = e.target.value;
    this.ZufriedenheitsfaktorenChange.emit(this.Zufriedenheitsfaktoren);
  }
  ZufriedenheitsfaktorenChange2(e: any) {
    this.Zufriedenheitsfaktoren.faktor2 = e.target.value;
    this.ZufriedenheitsfaktorenChange.emit(this.Zufriedenheitsfaktoren);
  }
  ZufriedenheitsfaktorenChange3(e: any) {
    this.Zufriedenheitsfaktoren.faktor3 = e.target.value;
    this.ZufriedenheitsfaktorenChange.emit(this.Zufriedenheitsfaktoren);
  }

  ErfuellungBereichChange(e: any): string {
    setTimeout(() => {
      this.updateAllSchieberegler();
    }, 1);
    return e.target.value;
  }

  updateAllSchieberegler() {
    this.allIchSchiebereglerChange.emit(this.allIchSchieberegler);
    this.allFamilieSchiebereglerChange.emit(this.allFamilieSchieberegler);
    this.allBerufSchiebereglerChange.emit(this.allBerufSchieberegler);
    this.allUmweltSchiebereglerChange.emit(this.allUmweltSchieberegler);
  }

  addIchSchieberegler() {
    this.allIchSchieberegler.push(this.createRegler());
  }
  addFamilieSchieberegler() {
    this.allFamilieSchieberegler.push(this.createRegler());
  }
  addBerufSchieberegler() {
    this.allBerufSchieberegler.push(this.createRegler());
  }
  addUmweltSchieberegler() {
    this.allUmweltSchieberegler.push(this.createRegler());
  }

  createRegler(): Schieberegler {
    return {
      beschreibung: '',
      locked: false,
      regler1: 0,
      regler2: 0,
      regler3: 0,
    };
  }
}
