import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShoppingListService } from './shopping-list.service';
import { Ingredient } from '../shared/ingredient.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  constructor(private shoppingListService: ShoppingListService) {}

  ingredients: Ingredient[] = [];
  private igChangeSub: Subscription;

  ngOnInit() {
    this.ingredients = this.shoppingListService.getAllIngredients();
    this.igChangeSub = this.shoppingListService.ingredientsChanged
      .subscribe((ingredients: Ingredient[]) => {
      this.ingredients = ingredients;
    })
  }

  ngOnDestroy() : void {
    this.igChangeSub.unsubscribe();
  }

}
