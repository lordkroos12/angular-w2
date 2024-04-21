import { Component } from '@angular/core';
import {RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

type Book = {
  title: string,
  description: string,
  author: string,
  rating: number
  sum: number
}
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, FormsModule,CommonModule]
})

export class AppComponent {
  public message = false;
  public isFinished = false;
  public currentIndex = 0;
  public itteration = 1;
  book: Book[] = [{
    title: "The Hunger Games",
    description: "In the ruins of a place once known as North America lies the nation of Panem, a shining Capitol surrounded by twelve outlying districts. The Capitol is harsh and cruel and keeps the districts in line by forcing them all to send one boy and one girl between the ages of twelve and eighteen to participate in the annual Hunger Games, a fight to the death on live TV.",
    author: "Suzanne Collins",
    rating: 0,
    sum: 0
  },
  {
    title: "Pride and Prejudice",
    description: "Since its immediate success in 1813, Pride and Prejudice has remained one of the most popular novels in the English language. Jane Austen called this brilliant work her own darling child and its vivacious heroine, Elizabeth Bennet, as delightful a creature as ever appeared in print. The romantic clash between the opinionated Elizabeth and her proud beau, Mr. Darcy, is a splendid performance of civilized sparring. And Jane Austen's radiant wit sparkles as her characters dance a delicate quadrille of flirtation and intrigue, making this book the most superb comedy of manners of Regency England",
    author: "Jane Austen, Anna Quindlen",
    rating: 0,
    sum: 0
  },
  {
    title: "To Kill a Mockingbird",
    description: "The unforgettable novel of a childhood in a sleepy Southern town and the crisis of conscience that rocked it. To Kill A Mockingbird became both an instant bestseller and a critical success when it was first published in 1960. It went on to win the Pulitzer Prize in 1961 and was later made into an Academy Award-winning film, also a classic.",
    author: "Harper Lee",
    rating: 0,
    sum: 0
  },
  {
    title: "The Fault in Our Stars",
    description: "Despite the tumor-shrinking medical miracle that has bought her a few years, Hazel has never been anything but terminal, her final chapter inscribed upon diagnosis. But when a gorgeous plot twist named Augustus Waters suddenly appears at Cancer Kid Support Group, Hazel's story is about to be completely rewritten.",
    author: "John Green",
    rating: 0,
    sum: 0
  },
  {
    title: "Jane Eyre",
    description: "A gothic masterpiece of tempestuous passions and dark secrets, Charlotte Brontë's Jane Eyre is edited with an introduction and notes by Stevie Davis in Penguin Classics.",
    author: "Charlotte Brontë, Michael Mason",
    rating: 0,
    sum: 0
  },
  {
    title: "Memoirs of a Geisha",
    description: "A literary sensation and runaway bestseller, this brilliant novel presents with seamless authenticity and exquisite lyricism the true confessions of one of Japan's most celebrated geisha.",
    author: "Arthur Golden",
    rating: 0,
    sum: 0
  },
  ]


  saveData(inputTitle:HTMLInputElement,inputDescription:HTMLTextAreaElement,inputAuthor: HTMLInputElement,rate:number) {
    this.book[this.currentIndex].sum += rate;
    this.book[this.currentIndex].rating = Math.round((this.book[this.currentIndex].sum / this.itteration) * 2) / 2;

    this.book[this.currentIndex].title = inputTitle.value;
    this.book[this.currentIndex].description = inputDescription.value;
    this.book[this.currentIndex].author = inputAuthor.value;

    if (this.currentIndex < this.book.length - 1) {
      this.currentIndex++;
    }
    else {
      this.isFinished = true;
      this.currentIndex = 0;
      this.itteration++;
    }
  }
  goBack() {
    this.isFinished = false;
  }
  messageDisplay()
  {
    this.isFinished = false;
    this.message = true;
  }
}
