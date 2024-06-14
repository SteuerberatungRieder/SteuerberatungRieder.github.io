import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SchiebereglerComponent } from './components/schieberegler/schieberegler.component';
import { EingabeComponent } from './components/eingabe/eingabe.component';
import { AuswertungComponent } from './components/auswertung/auswertung.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { IstAnalyseComponent } from './components/ist-analyse/ist-analyse.component';
import { SchiebereglersetComponent } from './components/schiebereglerset/schiebereglerset.component';
import { ColorGradientPipe } from './pipes/color-gradient.pipe';
import { CSVdownloadComponent } from './components/csvdownload/csvdownload.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SchiebereglerComponent,
    EingabeComponent,
    AuswertungComponent,
    IstAnalyseComponent,
    SchiebereglersetComponent,
    ColorGradientPipe,
    CSVdownloadComponent
  ],
  imports: [BrowserModule, NgbModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faPlus);
  }
}
