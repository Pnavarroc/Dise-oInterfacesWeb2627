import { Service, inject } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Service()
export class ToastService {
  private readonly toastController: ToastController = inject(ToastController);

  async showToast(message: string, position: "bottom" | "top" | "middle", color: string, duration: number){
    const toast = await this.toastController.create({
      message,
      position,
      color,
      duration
    });
    await toast.present();
  }
}
