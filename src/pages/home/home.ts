import { Component } from '@angular/core';
import { NavController,MenuController } from 'ionic-angular';
import { OtherPage } from '../otherPage/otherPage';
import { ApiRest } from "../../services/apirest";
import { OtherPage2 } from '../otherPage2/otherPage2';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  nombre: any;
  photo: any;
  private credentials: any = {
    nc: '',
    pass: ''
  };
  constructor(public navCtrl: NavController, public apirest: ApiRest,  public menuCtrl: MenuController) {
    this.apirest.getUsers();
    this.menuCtrl.enable(false, 'mainMenu');
  }
  goToOtherPage(): void {
  
    /*this.navCtrl.push(OtherPage, {
      nombre:"Carlos",
    }
    );*/

    if(this.credentials.nc==='13401097'&&
    this.credentials.pass==='12345'
    ) {
      alert("Bienvenido Jonathan");
      this.navCtrl.push(OtherPage);
    } else if (this.credentials.nc==='13401098'&&this.credentials.pass==='12345'){
      alert("Bienvenido Jonathan2");
      this.navCtrl.push(OtherPage2);
    }
    else {
      alert("El usuario no está registrado")
    }

  }
  ionViewDidLoad() {
    console.log('Enter on Page');
  }
}
