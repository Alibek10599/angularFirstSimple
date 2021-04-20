import {RouterModule, Routes} from '@angular/router';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {NgModule} from '@angular/core';
import {RecipesComponent} from './recipes/recipes.component';
import {RecipeDetailComponent} from './recipes/recipe-detail/recipe-detail.component';
import {NewDetailComponent} from './recipes/new-detail/new-detail.component';
import {RecipeEditComponent} from './recipes/recipe-edit/recipe-edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/items', pathMatch: 'full'},
  {path: 'shopping-list', component: ShoppingListComponent},
  {path: 'items', component: RecipesComponent, children: [
      {path: '', component: NewDetailComponent},
      {path: 'new', component: RecipeEditComponent},
      {path: ':id', component: RecipeDetailComponent},
      {path: ':id/edit', component: RecipeEditComponent},
      ]}
];

 @NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

