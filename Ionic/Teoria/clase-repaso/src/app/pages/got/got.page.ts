import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonAvatar, IonBadge, IonContent, IonFab,
  IonFabButton, IonFabList, IonHeader, IonIcon, IonItem, IonItemOption, IonItemOptions,
  IonItemSliding, IonLabel, IonList, IonText, IonTitle, IonToolbar } from '@ionic/angular';
import { GoTService } from '../../services/go-t';
import { CharacterGoT } from '../../common/models/game-of-thrones.model';
import { GotModalComponent } from '../../components/got-modal/got-modal.component';
import { addIcons } from 'ionicons';
import { trash } from 'ionicons/icons';
import { ToastService } from '../../services/toast-service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-got',
  templateUrl: './got.page.html',
  styleUrls: ['./got.page.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonList,
    IonItem,
    IonAvatar,
    IonLabel,
    IonBadge,
    GotModalComponent,
    IonText,
    IonItemSliding,
    IonItemOptions,
    IonItemOption,
    IonIcon,
    IonFab,
    IonFabButton,
    IonFabList,
    RouterLink,
  ],
})
export class GotPage implements OnInit {
  private readonly gotService: GoTService = inject(GoTService);
  characters = signal<CharacterGoT[]>([]);
  favoriteChars = signal<CharacterGoT[]>([]);
  private readonly toastService: ToastService = inject(ToastService);

  constructor() {
    addIcons({ trash });
  }

  ngOnInit() {
    this.loadCharacters();
  }

  private loadCharacters() {
    this.gotService.getCharacters().subscribe({
      next: (res) => {
        this.characters.set(res);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  deleteFav(fav: CharacterGoT) {
    this.favoriteChars.update((chars) => chars.filter((char) => char.id !== fav.id));
    this.toastService.showToast('danger', fav.fullName + ' deleted from favorites');
  }
}
