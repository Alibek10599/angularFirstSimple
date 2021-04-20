import {Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {Ingridient} from '../../shared/ingridient.model';
import {ShoppingListService} from '../shopping-list.service';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  names;
  amounts;
  subscription: Subscription;
  editMode = false;
  editedIndex: number;
  editedItem: Ingridient;

  @ViewChild('f', { static: false }) slForm: NgForm;
 /* @ViewChild('nameInput', {static: true}) nameInput: ElementRef;
  @ViewChild('amountInput', {static: true}) amountInput: ElementRef;*/
 //@Output() ingridient = new EventEmitter<Ingridient>();
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.subscription = this.shoppingListService.startEditing.subscribe(
      (index: number) => {
        this.editedIndex = index;
        this.editMode = true;
        this.editedItem = this.shoppingListService.getIngridient(index);
        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        })
      }
    );
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSubmit(form: NgForm ) {
    const value = form.value;
    const newIngridient = new Ingridient( value.name, value.amount);
     // this.shoppingListService.onIngridient.emit(newIngridient);
     if (this.editMode) {
       this.shoppingListService.updateIngridient(this.editedIndex, newIngridient);
     } else {
       this.shoppingListService.addIngridient(newIngridient);
     }
     this.editMode = false;
     form.reset();
    /*this.names = this.nameInput.nativeElement.value;
    this.amounts = this.amountInput.nativeElement.value;
    const newIngridient = new Ingridient( this.names, this.amounts);
    this.shoppingListService.onIngridient.emit(newIngridient);*/
  }
  onDelete ( ) {
    this.shoppingListService.deleteIngridient(this.editedIndex, this.editedItem);
    this.onClear();
  }

  onClear() {
    this.slForm.reset();
    this.editMode = false;
  }

}
