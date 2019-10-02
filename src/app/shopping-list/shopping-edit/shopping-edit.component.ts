import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput', { static: false } ) nameInput;
  @ViewChild('amountInput', { static: false } ) amountInput;

  @Output() ingredients: EventEmitter<Ingredient> = new EventEmitter;


  constructor() { }

  ngOnInit() {
  }

  submitForm() {
    const name = this.nameInput.nativeElement.value;
    const amount = this.amountInput.nativeElement.value;
    this.ingredients.emit(new Ingredient(name, amount));

    this.nameInput.nativeElement.value = null;
    this.amountInput.nativeElement.value = null;
  }

}
