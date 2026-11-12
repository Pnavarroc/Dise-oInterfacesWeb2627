import { Component, inject, input, model, OnInit, output } from '@angular/core';
import { CharacterGoT } from '../../common/models/game-of-thrones.model';
import { IonBadge, IonButton, IonButtons, IonCard, IonCardContent, IonContent, IonFooter, IonHeader,
  IonIcon, IonModal, IonTitle, IonToolbar } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { save, close, logoIonitron, add } from 'ionicons/icons';
import { ToastService } from '../../services/toast-service';

@Component({
  selector: 'app-got-modal',
  templateUrl: './got-modal.component.html',
  styleUrls: ['./got-modal.component.scss'],
  imports: [
    IonModal,
    IonFooter,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardContent,
    IonBadge,
    IonButtons,
    IonIcon,
    IonButton,
  ],
})
export class GotModalComponent implements OnInit {
  char = input.required<CharacterGoT>();
  favoriteChars = model.required<CharacterGoT[]>();
  private readonly toastService: ToastService = inject(ToastService);

  constructor() {
    addIcons({ save, close, add, logoIonitron });
  }

  ngOnInit() {}

  protected onWillDismiss(event: CustomEvent) {
    if (event.detail.role === 'save') {
      const character = this.char();

      this.favoriteChars.update((chars) =>
        chars.some((char) => char.id === character.id) ? chars : [...chars, character],
      );
      this.toastService.showToast("success", "Character saved!")
    }
    if(event.detail.role === "cancel"){
      this.toastService.showToast('danger', 'Character closed!');
    }
  }
}
