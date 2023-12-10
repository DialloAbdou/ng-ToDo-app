import { Component, OnInit } from '@angular/core';
import { Book } from './book';
import { BOOKS } from './mock-book-list';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html'
})
export class AppComponent implements OnInit {
  title = 'Liste des Livres';
  listLivres:Book[] = BOOKS

  ngOnInit(): void {
    console.log(this.listLivres) //affiche le tableau
  }
  
  selectBook(event:MouseEvent){
    const index:number= +(event.target as HTMLInputElement).value
    console.log(` le nom du Livre est : ${this.listLivres[index].Name}`)
  }

}
