import { Component } from '@angular/core';
import { Book } from './book';
import { BOOKS } from './mock-book-list';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html'
})
export class AppComponent{
  title = 'Liste des Livres';
  listLivres: Book[]|undefined
  /*
   * Les Constructeurs
  */

  /*
   * Les Constructeurs
  */
  constructor()
  {

  }
}
