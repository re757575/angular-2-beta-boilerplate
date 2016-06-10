import {Component} from 'angular2/core';
import {ShoppingListNewItemComponent} from './shopping-list-new-item-component';
import {ShoppingListItemComponent} from './shopping-list-item-component';
import {ListItem} from './item-list';

@Component({
    selector: 'shopping-list',
    template: `
        <section>
            <shopping-list-new-item (itemAdded)="onItemAdded($event)"></shopping-list-new-item>
        </section>
        <section>
            <h3>My List</h3>
            <div class="list">
                <ul>
                    <li *ngFor="let listItem of listItems" (click)="onSelected(listItem)">
                        {{listItem.name}}({{listItem.amount}})
                    </li>
                </ul>
            </div>
        </section>
        <section *ngIf="selectedItem != undefined">
            <shopping-list-item [item]="selectedItem" (removed)="onRemoved($event)">
            </shopping-list-item>
        </section>
    `,
    directives: [ShoppingListNewItemComponent, ShoppingListItemComponent]
})
export class ShoppingListComponent {

    listItems = new Array<ListItem>();
    selectedItem: ListItem;


    onItemAdded (item: ListItem) {
        this.listItems.push({name: item.name, amount: item.amount});
    }

    onSelected (item: ListItem) {
        console.log(item);
        this.selectedItem = item;
    }

    onRemoved (item: ListItem) {
        console.log(item);
        this.listItems.splice(this.listItems.indexOf(item), 1);
        this.selectedItem = undefined;
    }
}
