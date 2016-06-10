import {Component, EventEmitter} from 'angular2/core';
import {ListItem} from './item-list';

@Component({
    selector: 'shopping-list-item',
    template: `
        <div class="input">
            <label for="item-name">Name</label>
            <input type="text" id="item-name" [(ngModel)]="item.name">
        </div>
        <div class="input">
            <label for="item-amount">Amount</label>
            <input type="number" id="item-amount" [(ngModel)]="item.amount">
        </div>
        <button class="danger" (click)="onDelete()">Delete Item</button>
    `,
    inputs: ['item'],
    outputs: ['removed']
})
export class ShoppingListItemComponent {

    item = {name: '', amount: 0};
    removed = new EventEmitter<ListItem>();

    onDelete (item: ListItem) {
        this.removed.emit(this.item);
    }
}
