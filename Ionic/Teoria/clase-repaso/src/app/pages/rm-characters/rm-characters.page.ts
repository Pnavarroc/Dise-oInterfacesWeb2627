import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  InfiniteScrollCustomEvent, IonBadge, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonHeader,
  IonInfiniteScroll, IonInfiniteScrollContent, IonTitle, IonToolbar } from '@ionic/angular';
import { RmService } from '../../services/rm-service';
import { Info, RMCharacter } from '../../common/models/rm-characters.model';

@Component({
  selector: 'app-rm-characters',
  templateUrl: './rm-characters.page.html',
  styleUrls: ['./rm-characters.page.scss'],
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonBadge,
    IonInfiniteScroll,
    IonInfiniteScrollContent,
  ],
})
export class RmCharactersPage implements OnInit {
  private readonly rmService: RmService = inject(RmService);
  characters = signal<RMCharacter[]>([]);
  info = signal<Info | undefined>(undefined);
  currentPage = signal<number>(1);
  constructor() {}

  ngOnInit() {
    this.loadCharacters();
  }

  private loadCharacters() {
    this.rmService.getCharacters(this.currentPage()).subscribe({
      next: (res) => {
        this.characters.set(res.results);
        //this.info.set();
      },
      error: err=>{
        console.log(err);
      }
    });
  }

  protected loadMore(event: InfiniteScrollCustomEvent) {
    this.currentPage.update(pag => pag+1);
    this.rmService.getCharacters(this.currentPage()).subscribe(
      {
        next: res=>{
          if(res.info.pages == this.currentPage()){
            this.characters.update(chars => [...chars, ...res.results]);
            event.target.complete();
            event.target.disabled= true;
          }else{
            event.target.complete();
          }
        },
        error: err=>{
          console.log(err);
        }
      }
    )
  }
}
