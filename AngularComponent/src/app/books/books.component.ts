import { Component } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})



export class BooksComponent {

  selectedBook: any;

  books = [
    {id: 1, name: "Harry Potter and the Goblet of Fire", year: 2000, price: 11.05, coverPath: "./assets/bookCover/hp4.jpg", isAvailable: "Available"},
    {id: 2, name: "The Hobbit", year:1937, price: 10.73, coverPath: "./assets/bookCover/hobbit.jpg", isAvailable: "Unavailable"},
    {id: 3, name: "Dune", year: 1965, price: 7.48, coverPath: "./assets/bookCover/dune.jpg", isAvailable: "Available"},
    {id: 4, name: "Aranyak", year:1976, price: 4.07, coverPath: "./assets/bookCover/aranyak.jpg", isAvailable: "Available"},
    {id: 5, name: "A Study in Scarlet", year: 1887, price: 6, coverPath: "./assets/bookCover/scarlet.jpg", isAvailable: "Available"}
  ];

  getAllBookCount() {
    return this.books.length;
  }

  getAvailableBookCount() {
    return this.books.filter(book => book.isAvailable === 'Available').length; 
  }

  getUnavailableBookCount() {
    return this.books.filter(book => book.isAvailable === 'Unavailable').length; 
  }

  bookCountRadioButton: string = 'All';
  searchText: string = '';
  

  parentOnFilterRadioButtonChanged(data: string) {
    this.bookCountRadioButton = data; 
    // console.log(this.bookCountRadioButton);
  }

  onSearchTextEntered(searchValue: string) {
    this.searchText = searchValue.toLowerCase();
    // console.log(this.searchText);
  }
}
