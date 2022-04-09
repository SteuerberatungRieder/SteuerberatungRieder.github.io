import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Schieberegler } from 'src/app/models/schieberegler.model';
import { Zufriedenheitsfaktoren } from 'src/app/models/zufriedenheitsfaktoren.module';

@Component({
  selector: 'app-schiebereglerset',
  templateUrl: './schiebereglerset.component.html',
  styleUrls: ['./schiebereglerset.component.scss'],
})
export class SchiebereglersetComponent implements OnInit {
  @Input() MainSchieberegler!: Schieberegler;
  @Input() beschreibung!: string;
  @Input() Zufriedenheitsfaktoren!: Zufriedenheitsfaktoren;

  @Output() Schieberegler1Change = new EventEmitter<number>();
  @Output() Schieberegler2Change = new EventEmitter<number>();
  @Output() Schieberegler3Change = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  reglerChange(e: number): number {
    setTimeout(() => {
      this.Schieberegler1Change.emit(this.MainSchieberegler.regler1);
      this.Schieberegler2Change.emit(this.MainSchieberegler.regler2);
      this.Schieberegler3Change.emit(this.MainSchieberegler.regler3);
    }, 1);
    return e;
  }
}
