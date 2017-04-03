import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { ComunService } from '../../providers/comun-service'
import { FirebaseService } from '../../providers/firebase-service'



@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html'
})
export class Registro {
  //-----------------------------------------------------------------
  // Atributos
  //-----------------------------------------------------------------
  carrera = 'Carrera'
  Apellidos: string
  nombre: string
  codigo: string
  semestre: string
  pass: string

  //-----------------------------------------------------------------
  // Constructor
  //-----------------------------------------------------------------
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public ComunService: ComunService, public FirebaseService: FirebaseService) { }

  //-----------------------------------------------------------------
  // Metodos
  //-----------------------------------------------------------------

  ionViewDidLoad() {
  }

  Carrera() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Lightsaber color');

    alert.addInput({
      type: 'radio',
      label: 'Ingeniería Ambiental',
      value: 'Ingeniería Ambiental',
      checked: false
    });
    alert.addInput({
      type: 'radio',
      label: 'Ingeniería Biomédica',
      value: 'Ingeniería Biomédica',
      checked: false
    });
    alert.addInput({
      type: 'radio',
      label: 'Ingeniería Civil',
      value: 'Ingeniería Civil',
      checked: false
    });
    alert.addInput({
      type: 'radio',
      label: 'Ingeniería Industrial',
      value: 'Ingeniería Industrial',
      checked: false
    });
    alert.addInput({
      type: 'radio',
      label: 'Ingeniería en Mecatrónica',
      value: 'Ingeniería en Mecatrónica',
      checked: false
    });
    alert.addInput({
      type: 'radio',
      label: 'Ingeniería en Multimedia',
      value: 'Ingeniería en Multimedia',
      checked: false
    });
    alert.addInput({
      type: 'radio',
      label: 'Ingeniería en Telecomunicaciones',
      value: 'Ingeniería en Telecomunicaciones',
      checked: false
    });
    alert.addInput({
      type: 'radio',
      label: 'Tecnología en Electrónica y Comunicaciones',
      value: 'Tecnología en Electrónica y Comunicaciones',
      checked: false
    });

    alert.addButton('Cancelar');
    alert.addButton({
      text: 'Aceptar',
      handler: data => {
        this.carrera = data
      }
    });
    alert.present();

  }

  guardar() {
    let mail= 'u'+this.codigo+'@unimilitar.edu.co'
    this.FirebaseService.registerEmail(mail,this.pass).then((user)=>{

    })
  }

  objetivos(){
    hipertrofia
    resitencia
    fuerza maxima 
  }

}
