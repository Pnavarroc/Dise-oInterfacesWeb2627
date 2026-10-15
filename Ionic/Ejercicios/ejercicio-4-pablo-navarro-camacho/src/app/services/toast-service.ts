import {inject, Service} from '@angular/core';
import {ToastController} from "@ionic/angular";

@Service()
export class ToastService {
  private readonly toastController: ToastController = inject(ToastController);

  async mostrarToast(message: string, duration: number, color: string, position: 'top' | 'bottom' | 'middle') {
    const toast = await this.toastController.create({
      message,
      duration,
      color,
      position
    })
    await toast.present();
  }
}
