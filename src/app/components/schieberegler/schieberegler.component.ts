import { OnInit, Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-schieberegler',
  templateUrl: './schieberegler.component.html',
  styleUrls: ['./schieberegler.component.scss'],
})
export class SchiebereglerComponent implements OnInit {
  @Input() regler!: number;

  @Output() reglerChange = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  mouseRegler(e: MouseEvent, ZZZRegler: HTMLElement) {
    if (e.buttons != 1) {
      return;
    }

    e.preventDefault();

    let height = ZZZRegler.offsetHeight;
    let relativclick = e.offsetY;
    let mausy = relativclick / height;

    if (mausy < 0) {
      mausy = 0;
    }
    if (mausy > 1) {
      mausy = 1;
    }
    let pos = 100 - mausy * 100;
    this.reglerChange.emit(pos.toString());
  }

  touchRegler(e: TouchEvent, ZZZRegler: HTMLElement) {
    
    e.preventDefault();
    
    let mausy=1;
    
    let touch = e.touches;
    let bounding =ZZZRegler.getBoundingClientRect();
    if (touch.length == 1) {
      mausy = (touch[0].clientY - bounding.y) / ZZZRegler.offsetHeight;
    }
    if (mausy < 0) {
      mausy = 0;
    }
    if (mausy > 1) {
      mausy = 1;
    }
    
    let pos = 100 - mausy * 100;
    this.reglerChange.emit(pos.toString());
    

  }
}
