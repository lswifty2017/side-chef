import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  @Input() currentPage: string;
  selectedRecipe: Recipe;

  constructor() { }

  ngOnInit() {
  }

  showRecipeDetails(recipe) {
    this.selectedRecipe = recipe;
  }

}
