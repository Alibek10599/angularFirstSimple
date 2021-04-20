import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewInit,
  Component,
  DoCheck, Input,
  OnChanges, OnDestroy,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import {Ingridient} from '../shared/ingridient.model';
import {ShoppingListService} from './shopping-list.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy{
 /* @Output() ingridients: Ingridient[] = [
    new Ingridient('apples', 5),
    new Ingridient('tomatoe', 10)
  ];*/
  someIngridient: Ingridient;
    ingridients: Ingridient [];
    private subscription: Subscription;
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit () {
    this.ingridients = this.shoppingListService.getShoppingList();
    this.subscription = this.shoppingListService.onIngridient.subscribe(
      (ingridients: Ingridient []) => {
        this.ingridients = ingridients;
        console.log(this.ingridients);
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onEdit(i: number) {
    this.shoppingListService.startEditing.next(i);

  }
}
