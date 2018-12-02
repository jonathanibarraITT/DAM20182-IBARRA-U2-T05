import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { OtherPage } from '../pages/otherPage/otherPage';
import { OtherPage2 } from '../pages/otherPage2/otherPage2';
import { ApiRest } from "../services/apirest";
import { MateriasRest } from "../services/materiasrest";
import { HttpModule } from "@angular/http";
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MateriaPage } from '../pages/materia/materia';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    OtherPage,
    OtherPage2,
    MateriaPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    OtherPage,
    OtherPage2,
    MateriaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ApiRest,
    MateriasRest,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
