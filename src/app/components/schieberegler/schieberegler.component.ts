import { OnInit, Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-schieberegler',
  templateUrl: './schieberegler.component.html',
  styleUrls: ['./schieberegler.component.scss'],
})
export class SchiebereglerComponent implements OnInit {
  @Input() regler!: number;

  @Output() reglerChange = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {}

  mouseRegler(e: MouseEvent, ZZZRegler: HTMLElement) {
    if (e.buttons != 1) {
      return;
    }

    
    let height = ZZZRegler.offsetHeight;
    let relativclick = e.offsetY;
    let mausy = relativclick / height;
    
    e.preventDefault();
    this.calcMaus(mausy);
  }

  touchRegler(e: TouchEvent, ZZZRegler: HTMLElement) {
    
    let mausy = 1;
    
    let touch = e.touches;
    let bounding = ZZZRegler.getBoundingClientRect();
    if (touch.length == 1) {
      mausy = (touch[0].clientY - bounding.y) / ZZZRegler.offsetHeight;
    }
    
    e.preventDefault();
    this.calcMaus(mausy);
  }

  calcMaus(mausy: number) {
    if (mausy < 0) {
      mausy = 0;
    }
    if (mausy > 1) {
      mausy = 1;
    }

    let pos = Math.round(100 - mausy * 100);
    this.reglerChange.emit(pos);
  }
}
