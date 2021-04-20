import {Component, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';
import {RecipeService} from '../recipe.service';
import {ActivatedRoute} from '@angular/router';
import {FormArray, FormControl, FormGroup} from '@angular/forms';
import {isAsciiHexDigit} from 'codelyzer/angular/styles/chars';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  recipes: Recipe;
   index: number;
   editMode = false;
   recipeForm: FormGroup;
  constructor(private route: ActivatedRoute,
              private rspService: RecipeService) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params) => {
              this.index = +params['id'];
              this.editMode = params['id'] != null;
              console.log("id: ", this.index);
        this.initForm();
      }
    );
  }

  private initForm() {
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    const recipeIngridients = new FormArray([]);
    if (this.editMode) {
      const recipe = this.rspService.getRecipeId(this.index);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;
      if (recipe['ingridients']) {
        for (const ingridient of recipe.ingridients) {
          recipeIngridients.push(
            new FormGroup({
              'name': new FormControl(ingridient.name),
              'amount': new FormControl(ingridient.amount)
            })
          );
        }
      }
    }
    this.recipeForm = new FormGroup({
      'name':  new FormControl(recipeName),
      'imagePath': new FormControl(recipeImagePath),
      'description': new FormControl(recipeDescription),
      'ingridients' : recipeIngridients
    });
  }

  onSubmit() {

  }

  get controls() { // a getter!
    return (<FormArray>this.recipeForm.get('ingridients')).controls;
  }


}
