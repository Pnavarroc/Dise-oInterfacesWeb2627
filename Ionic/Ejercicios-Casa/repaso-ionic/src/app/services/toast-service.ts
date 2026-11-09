import { inject, Service } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Service()
export class ToastService {
  private readonly toastController: ToastController = inject(ToastController);

  async showToast(message: string , position: "middle"|"top"|"bottom", duration: number, color: string){
    const toast = await this.toastController.create({
      message,
      position,
      duration,
      color,
    });
    await toast.present();
  }
}
