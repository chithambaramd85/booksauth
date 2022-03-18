import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  myBooks:any= [];

  constructor(private bookservice:BookService) { }

  bookForm:FormGroup | any
  

  ngOnInit(): void {
    this.bookForm = new FormGroup({
      'bookid': new FormControl(null),
      'bookname':new FormControl(null),
      'author':new FormControl(null)
    })
  }
  onSubmit(){
  console.log(this.bookForm);
  }

  onPushBook(){
    const bookid = this.bookForm.get('bookid').value;
    const bookname = this.bookForm.get('bookname').value;
    const author = this.bookForm.get('author').value;

    this.myBooks.push({
      bookid:bookid,
      bookname:bookname,
      author:author

    })
  }

  onSave(){
    this.bookservice.saveBook(this.myBooks).subscribe(sub=>{
      console.log(sub);
    }, error=>{
      console.log(error);
    })
  }

  onGet(){
    this.bookservice.getBook().subscribe(sub=>{
      console.log(sub);
    }, err=>{
      console.log(err);
    })
  }



}
