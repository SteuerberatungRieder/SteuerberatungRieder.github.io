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
  @Input() allSchieberegler!: Schieberegler[];

  @Output() ZufriedenheitsfaktorenChange = new EventEmitter<Zufriedenheitsfaktoren>();
  @Output() allSchiebereglerChange = new EventEmitter<Schieberegler[]>();


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
}
