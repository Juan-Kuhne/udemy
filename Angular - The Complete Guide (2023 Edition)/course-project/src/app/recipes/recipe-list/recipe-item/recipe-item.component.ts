import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
  @Input('recipe-item') recipe: Recipe;
  @Output('onRecipeSelected') recipeSelected = new EventEmitter();

  onItemSelected() {
    this.recipeSelected.emit({ ...this.recipe });
  }
}
