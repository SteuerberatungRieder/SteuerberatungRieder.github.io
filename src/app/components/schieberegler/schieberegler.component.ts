import { Component, Input, OnInit } from '@angular/core';
import { Schieberegler } from 'src/app/models/schieberegler.model';

@Component({
  selector: 'app-schieberegler',
  templateUrl: './schieberegler.component.html',
  styleUrls: ['./schieberegler.component.scss'],
})
export class SchiebereglerComponent implements OnInit {
  @Input() Schieberegler!: Schieberegler;

  constructor() {}

  ngOnInit(): void {}

  touchRegler(e: TouchEvent) {
    // e.originalEvent.preventDefault();
    // touch = e.originalEvent.touches;
    // if (touch.length == 1) {
    //   mausx = (touch[0].clientX - bounding.x) / canvas.offsetWidth;
    //   mausy = (touch[0].clientY - bounding.y) / canvas.offsetHeight;
    // }

    // if (mausy < 0) {
    //   mausy = 0;
    // }
    // if (mausy > 1) {
    //   mausy = 1;
    // }

    // let ctx = canvas.getContext('2d');
    // ctx.clearRect(0, 0, canvas.width, canvas.height);
    // ctx.fillStyle = canvas.dataset.color;
    // ctx.fillRect(
    //   0,
    //   canvas.offsetHeight * mausy,
    //   canvas.offsetWidth,
    //   canvas.offsetHeight
    // );
    // let pos = mausy;
    // canvas.dataset.count = 100 - Math.round(mausy * 100);
  }

  mouseRegler(e: MouseEvent) {
    if (e.buttons != 1) {
      return;
    }

    let target = e.target;
    
    e.offsetY

    // let mausx = (e.clientX - target);
    // let mausy = (e.clientY - target);

    // if (mausy < 0) {
    //   mausy = 0;
    // }
    // if (mausy > 1) {
    //   mausy = 1;
    // }

  }
}
