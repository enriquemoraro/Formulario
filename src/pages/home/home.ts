import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';

declare var firebase: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public matricula: any;
  public carrera: any;
  public grupo: any;
  public nombre: any;
  public edad: any;
  public noSeguroSocial: any;
  public correo: any;
  public telCelular: any;
  public telCasa: any;
  public sectorPublico = false;
  public sectorPrivado = false;
  public nombreEmpresa: any;
  public RFC: any;
  public CCT: any;
  public calle: any;
  public noExterior: any;
  public noInterior: any;
  public codigoPostal: any;
  public colonia: any;
  public municipio: any;
  public nombreResponsable: any;
  public cargoResponsable: any;
  public numTelResponsable: any;
  public extencion: any;
  public competencias: any;
  public diasAsitencia: any;
  public horarioAsistencia: any;
  public fechaInicio: any;
  public fechaTermino: any;
  public data: any;
  public referencia: any;
  public loading: any;

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController) {

  }

  quitarLoading() {
    setTimeout(() => {
      this.loading.dismiss().catch(() => { console.log("Fallo quitar la mascara"); });
    }, 500);
  }

  mostrarLoading(textoLoading) {
    this.loading = this.loadingCtrl.create({
      content: textoLoading
    });
    this.loading.present();
  }

  guardar(screenform) {
    console.log('submit');
    console.log(screenform);
    console.log(screenform.valid);

    if (screenform.valid) {
      this.mostrarLoading("Esperar un momento por favor...");

      let objetoEstudiante = {
        "matricula": this.matricula,
        "carrera": this.carrera,
        "grupo": this.grupo,
        "nombre": this.nombre,
        "edad": this.edad,
        "noSeguroSocial": this.noSeguroSocial,
        "correo": this.correo,
        "telCelular": this.telCelular,
        "telCasa": this.telCasa,
        "sectorPublico": this.sectorPublico,
        "sectorPrivado": this.sectorPrivado,
        "nombreEmpresa": this.nombreEmpresa,
        "RFC": this.RFC,
        "CCT": this.CCT,
        "calle": this.calle,
        "noExterior": this.noExterior,
        "noInterior": this.noInterior,
        "codigoPostal": this.codigoPostal,
        "colonia": this.colonia,
        "municipio": this.municipio,
        "nombreResponsable": this.nombreResponsable,
        "cargoResponsable": this.cargoResponsable,
        "numTelResponsable": this.numTelResponsable,
        "extencion": this.extencion,
        "competencias": this.competencias,
        "diasAsitencia": this.diasAsitencia,
        "horarioAsistencia": this.horarioAsistencia,
        "fechaInicio": this.fechaInicio,
        "fechaTermino": this.fechaTermino
      }

      console.log("objetoEstudiante");
      console.log(objetoEstudiante);

      var ref = firebase.database().ref('estudiantes');
      ref.child("estudiante").push(objetoEstudiante);

      this.inicializar();
      this.quitarLoading();
      this.navCtrl.setRoot(HomePage);
    }
  }

  sectorPublicoFuncion(sector) {
    console.log('sector---------sectorPublicoFuncion');
    console.log(sector);
    if (sector === true) {
      this.sectorPrivado = false;
    } else {
      this.sectorPrivado = true;
    }
  }

  sectorPrivadoFuncion(sector) {
    console.log('sector----------sectorPrivadoFuncion');
    console.log(sector);
    if (sector === true) {
      this.sectorPublico = false;
    } else {
      this.sectorPublico = true;
    }
  }

  inicializar() {
    this.matricula = '';
    this.carrera = '';
    this.grupo = '';
    this.nombre = '';
    this.edad = '';
    this.noSeguroSocial = '';
    this.correo = '';
    this.telCelular = '';
    this.telCasa = '';
    this.sectorPublico = false;
    this.sectorPrivado = false;
    this.nombreEmpresa = '';
    this.RFC = '';
    this.CCT = '';
    this.calle = '';
    this.noExterior = '';
    this.noInterior = '';
    this.codigoPostal = '';
    this.colonia = '';
    this.municipio = '';
    this.nombreResponsable = '';
    this.cargoResponsable = '';
    this.numTelResponsable = '';
    this.extencion = '';
    this.competencias = '';
    this.diasAsitencia = '';
    this.horarioAsistencia = '';
    this.fechaInicio = '';
    this.fechaTermino = '';
    this.data = '';
    this.referencia = '';
  }
}
