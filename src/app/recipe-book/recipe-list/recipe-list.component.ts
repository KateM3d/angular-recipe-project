import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'Grilled Avocado',
      'avocado and cheese',
      'https://hips.hearstapps.com/hmg-prod/images/delish-200114-baked-avocado-boats-0361-landscape-pflo-jpg-1647890967.jpg?crop=1.00xw:0.452xh;0,0.262xh&resize=1200:*'
    ),
    new Recipe(
      'Pizza Caprese',
      'basilic cheese',
      'https://www.mtl.org/sites/default/files/styles/paragraph_image_text/public/2022-02/3.jpg?itok=aUn73EYP'
    ),
  ];
  constructor() {}

  ngOnInit(): void {}

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
