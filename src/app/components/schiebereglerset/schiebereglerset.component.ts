import { Component, Input, OnInit } from '@angular/core';
import { Schieberegler } from 'src/app/models/schieberegler.model';
import { Zufriedenheitsfaktoren } from 'src/app/models/zufriedenheitsfaktoren.module';



@Component({
  selector: 'app-schiebereglerset',
  templateUrl: './schiebereglerset.component.html',
  styleUrls: ['./schiebereglerset.component.scss'],
})
export class SchiebereglersetComponent implements OnInit {
  
  @Input() Schieberegler!: Schieberegler;
  @Input() Zufriedenheitsfaktoren!: Zufriedenheitsfaktoren;

  
  constructor() {}

  ngOnInit(): void {}
}

