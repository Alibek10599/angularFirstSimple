import {Ingridient} from '../shared/ingridient.model';
import {EventEmitter, Injectable, OnInit} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable()
export class ShoppingListService {
  onIngridient = new Subject<Ingridient[]>();
  startEditing = new Subject<number>();
  private ingridients: Ingridient[] = [
    new Ingridient('apples', 5),
    new Ingridient('tomatoe', 10)
  ];
  getShoppingList() {
    return this.ingridients.slice();
  }
  getIngridient (i: number) {
    return this.ingridients[i];
  }

  pushIngridient(ingridient: Ingridient) {
    this.ingridients.push(ingridient);
    this.onIngridient.next(this.ingridients.slice());

  }
  addIngridients(ingridientList: Ingridient []) {
    // for (const ingridient of ingridientList) {
    //   this.pushIngridient(ingridient);
    // }
    this.ingridients.push(...ingridientList); // spread operator converts into list
    this.onIngridient.next(this.ingridients.slice());
    console.log(this.ingridients);
  }
  addIngridient(ingridientList: Ingridient ) {
    // for (const ingridient of ingridientList) {
    //   this.pushIngridient(ingridient);
    // }
    this.ingridients.push(ingridientList); // spread operator converts into list
    this.onIngridient.next(this.ingridients.slice());
    console.log(this.ingridients);
  }

  updateIngridient(index: number, newIngridient: Ingridient) {
    this.ingridients[index] = newIngridient;
    this.onIngridient.next(this.ingridients.slice());
  }

  deleteIngridient(index: number, ingridient: Ingridient) {
    console.log(index);
    this.ingridients.splice(index, 1);
    this.onIngridient.next(this.ingridients.slice());
  }

}
