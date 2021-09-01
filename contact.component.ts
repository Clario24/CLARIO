import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validator } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  'contactForm':  FormGroup;
  country: string[] = ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '.', '0', '=', '+'];

  constructor() { }

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      'firstname': new FormControl(),
      'lastname': new FormControl(),
      'email': new FormControl(),
      'gender': new FormControl(),
      'isMarried': new FormControl(),
      'country': new FormControl()
    })
  }
  onSubmit() {
    console.log(this.contactForm.value);
  }

}
