import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelected = new EventEmitter<Recipe>();
 recipes: Recipe [] = [
    new Recipe('fires recipe', ' first recipe lorem ipsum au pau', 'https://assembly.kz/upload/iblock/907/9075762ac5160ccca91e7e9ea2295bb6.jpg'),
    new Recipe('second recipe', ' first recipe lorem ipsum au pau', 'https://www.meme-arsenal.com/memes/52f774b6559229d626191ae0cc564671.jpg')

  ];
  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

}
