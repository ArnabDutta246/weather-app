import { Injectable } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ActionComponentService {

  constructor(
    private actionSheetController:ActionSheetController
  ) { }

  async presentActionSheet() {
  const actionSheet = await this.actionSheetController.create({
    header: 'More about',
    cssClass: 'my-custom-class',
    mode:'md',
    buttons: [
      {
      text: 'Forcast Your Area',
      role: 'forcast',
      icon: 'megaphone-outline',
      cssClass:'primaryIcon',
      handler: () => {
        console.log('Go to forcast page');
      }
    },
    {
      text: 'Research History',
      role: 'histroy',
      icon: 'bar-chart-outline',
      cssClass:'warningIcon',
      handler: () => {
        console.log('Go to history page');
      }
    },
    {
      text: 'Compare With Other Area',
      role: 'compare',
      icon: 'search-outline',
      cssClass:'successIcon',
      handler: () => {
        console.log('Go to history page');
      }
    },  
      {
      text: 'Cancel',
      icon: 'close',
      role: 'cancel',
      cssClass:'dangerIcon',
      handler: () => {
        console.log('Cancel clicked');
      }
    }]
  });
  await actionSheet.present();
}
}
