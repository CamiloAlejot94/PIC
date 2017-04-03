// -----------------------------------------------------------------
// Components
// -----------------------------------------------------------------
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
// -----------------------------------------------------------------
// Page
// -----------------------------------------------------------------
import { MyApp } from './app.component';
import { Registro } from '../pages/registro/registro'

// -----------------------------------------------------------------
// Providers
// -----------------------------------------------------------------
import {FirebaseService} from '../providers/firebase-service'
import {ComunService} from '../providers/comun-service'


@NgModule({
  declarations: [
    MyApp,
    Registro
    
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Registro
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},FirebaseService,ComunService]
})
export class AppModule {}
