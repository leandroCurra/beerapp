import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { BrowserQRCodeReader } from '@zxing/library';
import { BeerModalComponent } from '../components/beer-modal/beer-modal.component';
import { ModalController } from '@ionic/angular';
import { Beer } from '../clases/beer';
declare var cordova;

@Component({
  selector: "app-list",
  templateUrl: "list.page.html",
  styleUrls: ["list.page.scss"]
})
export class ListPage implements OnInit {
  private codeReader = new BrowserQRCodeReader();
   img: string | HTMLImageElement;
  public escanenado: boolean = false;
  private inputDevices: string[] = [];
  private indiceCamera = 0;
  
  constructor(private modalController: ModalController) {}

  async scan() {
    this.escanenado = true;
    this.codeReader
      .getVideoInputDevices()
      .then(videoInputDevices => {
        videoInputDevices.forEach(device => {
          console.log(device);
        });
        let firstDeviceId = videoInputDevices[0].deviceId;
        this.codeReader
          .decodeFromInputVideoDevice(firstDeviceId, "video")
          .then(result => {
            console.log(result);
            this.escanenado = false;
            this.codeReader.reset();
          })
          .catch(error => {
            // this.escanenado = false;
            console.error(error);
          });

        // videoInputDevices.forEach(device =>
        //     console.log(`${device.label}, ${device.deviceId}`)

        // );
      })
      .catch(err => {
        console.log(err);
        // this.escanenado = false;
      });

    //   try {
    //     const result = await this.codeReader.decodeFromImage(this.img);
    //     console.log(result);
    //    }

    // catch (err) {
    //     console.error(err);
    // }
  }

  async ngOnInit() {
    this.img = <HTMLImageElement>document.getElementById("img");
    this.inputDevices = await this.getInputDevices();
  }

  public async escan(id_camera?: string) {
    if(  !id_camera ){
      id_camera = this.inputDevices[0];
      if(  this.inputDevices.length > 1 ){
        id_camera = this.inputDevices[1];
        this.indiceCamera ++;
      }
    }
    console.log( id_camera )
    this.escanenado = true;

    this.codeReader.getVideoInputDevices().then( inputDevices => {
      console.log( 'cantidad de camaras',  inputDevices.length)
      this.codeReader.decodeFromInputVideoDevice( id_camera , 'video').then( data=> {
        this.showModal();
        console.log( data );
        this.escanenado = false;
        this.codeReader.reset();
      })

    });

 
  }
  // public async escan(id_camera?: string) {
  //   if(  !id_camera ){
  //     id_camera = this.inputDevices[0];
  //   }
  //   console.log( id_camera )
  //   let devices =  await this.codeReader.getVideoInputDevices();
  //   const result = await this.codeReader.decodeFromInputVideoDevice( devices[0].deviceId , "video");
  //   console.log( result )
  //   this.escanenado = false;
  //   this.codeReader.reset();
  // }
  private getInputDevices(): Promise< string[] > {
    return new Promise((resolve, reject) => {
      const devices: string[] = [];
      this.codeReader.getVideoInputDevices().then(videoInputDevices => {
        videoInputDevices.forEach(device => {
          devices.push(device.deviceId);
        });
        if (devices.length === 0) {
          reject("no hay devices");
        }
        resolve(devices);
      });
    });
  }

 public escanear(): void {
    setTimeout(() => {
      this.escan();
    }, 1000);
  }

  public cancelScan():void {
    this.escanenado = false;
    this.codeReader.reset();
  }
  public changeCamera(): void {
    
    if ( this.indiceCamera === this.inputDevices.length   -1){
      this.indiceCamera  =  0;

    }else{

      this.indiceCamera ++;
    }
    const idDevice = this.inputDevices[this.indiceCamera];
    console.log( 'indice', this.indiceCamera    );
    console.log( 'array',  this.inputDevices   )

    console.log( 'id a enviar', idDevice )
    this.escan(  idDevice );

  }

  ngOnDestroy(): void {

    this.escanenado = false;
    this.codeReader.reset();
    
  }

  private async showModal(){
    const beer = new Beer();
    beer.index = 1;
    beer.nombre = "IPA";
    beer.subtittulo = 'Graduación alcohólica y la presencia de lúpulo.';
    beer.detalle =  `En esencia, dos son los caracteres significativos de este tipo de cerveza:
     la graduación alcohólica y la presencia de lúpulo.`;
    beer.imagen = "/assets/ipa.jpg";
    const modal = await this.modalController.create({
  component: BeerModalComponent,
  componentProps: { value: beer }
});


return await modal.present();
}
}
