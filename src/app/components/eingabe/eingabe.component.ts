import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { Schieberegler } from 'src/app/models/schieberegler.model';
import { Zufriedenheitsfaktoren } from 'src/app/models/zufriedenheitsfaktoren.module';

@Component({
  selector: 'app-eingabe',
  templateUrl: './eingabe.component.html',
  styleUrls: ['./eingabe.component.scss'],
})
export class EingabeComponent implements OnInit {
  @Input() Zufriedenheitsfaktoren!: Zufriedenheitsfaktoren;
  @Input() extraRegler!: boolean;
  @Input() allIchSchieberegler!: Schieberegler[];
  @Input() allFamilieSchieberegler!: Schieberegler[];
  @Input() allBerufSchieberegler!: Schieberegler[];
  @Input() allUmweltSchieberegler!: Schieberegler[];
  @Input() allGenerellSchieberegler!: Schieberegler[];

  @Output() ZufriedenheitsfaktorenChange = new EventEmitter<Zufriedenheitsfaktoren>();

  @Output() allIchSchiebereglerChange = new EventEmitter<Schieberegler[]>();
  @Output() allFamilieSchiebereglerChange = new EventEmitter<Schieberegler[]>();
  @Output() allBerufSchiebereglerChange = new EventEmitter<Schieberegler[]>();
  @Output() allUmweltSchiebereglerChange = new EventEmitter<Schieberegler[]>();

  @Output() allGenerellSchiebereglerChange = new EventEmitter<Schieberegler[]>();

  @ViewChildren('IchSchieberegler', { read: ElementRef })
  IchSchiebereglers!: QueryList<ElementRef>;
  @ViewChildren('FamilieSchieberegler', { read: ElementRef })
  FamilieSchiebereglers!: QueryList<ElementRef>;
  @ViewChildren('BerufSchieberegler', { read: ElementRef })
  BerufSchiebereglers!: QueryList<ElementRef>;
  @ViewChildren('UmweltSchieberegler', { read: ElementRef })
  UmweltSchiebereglers!: QueryList<ElementRef>;
  @ViewChildren('GenerallSchieberegler', { read: ElementRef })
  GenerallSchiebereglers!: QueryList<ElementRef>;
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
    this.allGenerellSchiebereglerChange.emit(this.allGenerellSchieberegler);
  }

  addIchSchieberegler() {
    this.allIchSchieberegler.push(this.createRegler());
    setTimeout(() => {
      const lastInput = this.IchSchiebereglers.last.nativeElement as HTMLInputElement;
      lastInput.focus();
    });
  }
  addFamilieSchieberegler() {
    this.allFamilieSchieberegler.push(this.createRegler());
    setTimeout(() => {
      const lastInput = this.FamilieSchiebereglers.last.nativeElement as HTMLInputElement;
      lastInput.focus();
    });
  }
  addBerufSchieberegler() {
    this.allBerufSchieberegler.push(this.createRegler());
    setTimeout(() => {
      const lastInput = this.BerufSchiebereglers.last.nativeElement as HTMLInputElement;
      lastInput.focus();
    });
  }
  addUmweltSchieberegler() {
    this.allUmweltSchieberegler.push(this.createRegler());
    setTimeout(() => {
      const lastInput = this.UmweltSchiebereglers.last.nativeElement as HTMLInputElement;
      lastInput.focus();
    });
  }

  addGenerellSchieberegler() {
    this.allGenerellSchieberegler.push(this.createRegler());
    setTimeout(() => {
      const lastInput = this.GenerallSchiebereglers.last
        .nativeElement as HTMLInputElement;
      lastInput.focus();
    });
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
