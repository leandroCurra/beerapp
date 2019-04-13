import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { BrowserQRCodeReader } from '@zxing/library';
declare var cordova;

@Component({
  selector: "app-list",
  templateUrl: "list.page.html",
  styleUrls: ["list.page.scss"]
})

export class ListPage implements OnInit{
   codeReader = new BrowserQRCodeReader();
   img :string | HTMLImageElement;
   escanenado = false;
  constructor() {}
 
 
  async scan(){
    this.escanenado = true;
    this.codeReader
    .getVideoInputDevices()
    .then(videoInputDevices => {
      let firstDeviceId = 0;
      videoInputDevices.forEach(device =>{
        alert(JSON.stringify(videoInputDevices));

        console.log(`${device.label}, ${device.deviceId}`);

        if( device.label.indexOf( 'back' ) >= 0  ){
        firstDeviceId = device.deviceId;
        }

      }
    );
      // let firstDeviceId = videoInputDevices[0].deviceId;
      this.codeReader
      .decodeFromInputVideoDevice(firstDeviceId, 'video')
      .then(result => {
        console.log(result)
        this.escanenado = false;
      this.codeReader.reset()})
      .catch(error => {
        // this.escanenado = false;
        console.error(error);
      });

        // videoInputDevices.forEach(device =>
        //     console.log(`${device.label}, ${device.deviceId}`)
            
        // );
    })
    .catch(err =>{
      console.log( err );
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

  ngOnInit(){
  this.img  = <HTMLImageElement>document.getElementById('img');

  }

  escanear(){
    setTimeout(() => {
      this.scan()
    }, 1000);
  }

  cancelScan(){
    this.escanenado = false;
    this.codeReader.reset();

  }

}
