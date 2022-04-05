import { Component, OnInit } from '@angular/core';
import { Schieberegler } from 'src/app/models/schieberegler.model';

@Component({
  selector: 'app-ist-analyse',
  templateUrl: './ist-analyse.component.html',
  styleUrls: ['./ist-analyse.component.scss']
})
export class IstAnalyseComponent implements OnInit {

  constructor() { }
  regler:Schieberegler={
    name:"test",
    beschreibung:"west",
    regler1:20,
    regler2:1,
    regler3:1
  }

  ngOnInit(): void {
  }

}
