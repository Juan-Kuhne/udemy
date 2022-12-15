import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Puttanesca-fd5810c.jpg'),
    new Recipe('Another Test Recipe', 'This is another simply a test', 'https://img.olhardigital.com.br/wp-content/uploads/2021/04/Junk-Food.jpg'),
  ];
  @Output('onRecipeSelected') selectedRecipe = new EventEmitter();

  itemSelected(recipe) {
    this.selectedRecipe.emit(recipe);
  }
}
