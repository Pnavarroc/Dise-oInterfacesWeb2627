import { inject, Service } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Service()
export class ToastService {
  private readonly toastController: ToastController = inject(ToastController);

  async showToast(message: string){
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      color: "secondary",
      position: "middle"
      });
    await toast.present();
  }
}
