import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingridient} from '../shared/ingridient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import {Subject} from 'rxjs';

@Injectable()
export class RecipeService {
   recipeSelected = new Subject<Recipe> ();
  private recipes: Recipe [] = [
    new Recipe('fires recipe',
      ' first recipe lorem ipsum au pau',
      'https://assembly.kz/upload/iblock/907/9075762ac5160ccca91e7e9ea2295bb6.jpg',
    [new Ingridient('Bread', 3),
      new Ingridient ('Tuna', 12)]),
    new Recipe('second recipe',
      ' second recipe Nadya Kim primi Islam!',
      'https://www.meme-arsenal.com/memes/52f774b6559229d626191ae0cc564671.jpg',
      [new Ingridient('Chesse', 5),
                new Ingridient('Kolbasa', 1)])

  ];

  constructor(private shoppingListService: ShoppingListService) {
  }
   getRecipe () {
     return this.recipes.slice();
   }

   getRecipeId(id: number) {
    return this.recipes.slice()[id];
   }

   addIngridientsToShop( ingridients: Ingridient []) {
      this.shoppingListService.addIngridients(ingridients);
   }

  }
