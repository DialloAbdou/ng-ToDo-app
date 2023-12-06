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
    console.log(this.listLivres)
    this.selectBook(this.listLivres[0])
  }
  
  selectBook(book: Book){
    console.log(` le nom du Livre est : ${book.Name}`)
  }

}
