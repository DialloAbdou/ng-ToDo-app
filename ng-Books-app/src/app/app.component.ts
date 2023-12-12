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
  booke : Book |undefined

  ngOnInit(): void {
    console.log(this.listLivres) //affiche le tableau
  }
  
   bookSelected(bookId : string){
    this.booke = this.listLivres.find(b=>b.id==+bookId)
    if(this.booke)
    {
      console.log(`le livre est ${this.booke.Name}`)
    }else{
      console.log("Ce livre n'existe pas")
    }
   }
  
  // selectBook(event:MouseEvent){
  //   const index:number= +(event.target as HTMLInputElement).value
  //   console.log(` le nom du Livre est : ${this.listLivres[index].Name}`)
  // }

}
