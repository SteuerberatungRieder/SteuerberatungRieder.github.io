import { Component, Input, OnInit } from '@angular/core';
import { Schieberegler } from 'src/app/models/schieberegler.model';
import { Zufriedenheitsfaktoren } from 'src/app/models/zufriedenheitsfaktoren.module';

@Component({
  selector: 'app-csvdownload',
  templateUrl: './csvdownload.component.html',
  styleUrls: ['./csvdownload.component.scss'],
})
export class CSVdownloadComponent implements OnInit {
  @Input() Zufriedenheitsfaktoren!: Zufriedenheitsfaktoren;
  @Input() extraRegler!: boolean;
  @Input() allIchSchieberegler!: Schieberegler[];
  @Input() allFamilieSchieberegler!: Schieberegler[];
  @Input() allBerufSchieberegler!: Schieberegler[];
  @Input() allUmweltSchieberegler!: Schieberegler[];
  @Input() allGenerellSchieberegler!: Schieberegler[];
  constructor() {}

  ngOnInit(): void {}
  downloadCSV() {
    let CSV = this.genCSV();
    console.log(CSV);
    this.download('zufriedenheitsfaktoren.csv', CSV);
  }

  download(filename: string, text: string) {
    var element = document.createElement('a');
    element.setAttribute(
      'href',
      'data:text/plain;charset=utf-8,' + encodeURIComponent(text)
    );
    element.setAttribute('download', filename);
    element.style.display = 'none';
    element.click();
  }

  genCSV(): string {
    console.log(this.Zufriedenheitsfaktoren);
    let header =
      'Ort,Bereich,' +
      this.Zufriedenheitsfaktoren.faktor1 +
      ',' +
      this.Zufriedenheitsfaktoren.faktor2 +
      ',' +
      this.Zufriedenheitsfaktoren.faktor3 +
      '\n';
    let allIchSchiebereglerCSV = '';
    this.allIchSchieberegler.forEach((IchSchieberegler) => {
      allIchSchiebereglerCSV =
        allIchSchiebereglerCSV + this.genCSVRow('Ich', IchSchieberegler);
    });
    let allFamilieSchiebereglerCSV = '';
    this.allFamilieSchieberegler.forEach((FamilieSchieberegler) => {
      allFamilieSchiebereglerCSV =
        allFamilieSchiebereglerCSV + this.genCSVRow('Familie', FamilieSchieberegler);
    });
    let allBerufSchiebereglerCSV = '';
    this.allBerufSchieberegler.forEach((BerufSchieberegler) => {
      allBerufSchiebereglerCSV =
        allBerufSchiebereglerCSV + this.genCSVRow('Beruf', BerufSchieberegler);
    });
    let allUmweltSchiebereglerCSV = '';
    this.allUmweltSchieberegler.forEach((UmweltSchieberegler) => {
      allUmweltSchiebereglerCSV =
        allUmweltSchiebereglerCSV + this.genCSVRow('Umwelt', UmweltSchieberegler);
    });
    let allGenerellSchiebereglerCSV = '';
    this.allGenerellSchieberegler.forEach((GenerellSchieberegler) => {
      allGenerellSchiebereglerCSV =
        allGenerellSchiebereglerCSV + this.genCSVRow('Generell', GenerellSchieberegler);
    });
    return this.extraRegler
      ? header +
          allIchSchiebereglerCSV +
          allFamilieSchiebereglerCSV +
          allBerufSchiebereglerCSV +
          allUmweltSchiebereglerCSV
      : header + allGenerellSchiebereglerCSV;
  }
  genCSVRow(ort: string, schieberegler: Schieberegler): string {
    return (
      ort +
      ',' +
      schieberegler.beschreibung +
      ',' +
      schieberegler.regler1 +
      ',' +
      schieberegler.regler2 +
      ',' +
      schieberegler.regler3 +
      '\n'
    );
  }
}
