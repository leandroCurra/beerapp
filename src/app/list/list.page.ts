import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Subscription } from "rxjs";
import { BrowserQRCodeReader } from '@zxing/library';
import { BeerModalComponent } from '../components/beer-modal/beer-modal.component';
import { ModalController } from '@ionic/angular';
import { Beer } from '../clases/beer';
import * as  AnimationItem from '../../assets/js/lottie/lottie';

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
  public lottieConfig: Object;
  animation:any;
  @ViewChild('animation') nameInputRef;

     private animationSpeed: number = 1;

  
  constructor(private modalController: ModalController) {  
//           this.lottieConfig = {
//     path: './assets/lottie/sanner.json',
//     renderer: 'canvas',
//     autoplay: false,
//     loop: true
// };

  }

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
    this.showAnimation();
  
 
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
        this.showAnimation();
      })

    });

 
  }

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
    this.showAnimation();

  
  
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

private showAnimation(): void {
  setTimeout(() => {
    const test = <HTMLImageElement>document.getElementById("animation");

    const lottieAnimation = AnimationItem.loadAnimation({
      container: test, // ID del div
      path: './assets/js/lottie/sanner.json', // Ruta fichero .json de la animación
      renderer: 'svg', // Requerido
      loop: true, // Opcional
      autoplay: true, // Opcional
      name: "Hello World", // Opcional
    })
  }, 500);
}
}
