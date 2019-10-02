import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() selectedRecipe: EventEmitter<Recipe> = new EventEmitter;

  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'Simply a test recipe', 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?cs=srgb&dl=burrito-chicken-close-up-461198.jpg&fm=jpg'),
    new Recipe('Test Recipe 2', 'Simply a test recipe, number 2', 'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?cs=srgb&dl=burrito-chicken-close-up-461198.jpg&fm=jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  emitRecipe(recipe) {
    this.selectedRecipe.emit(recipe);
  }

}
