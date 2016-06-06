import {Component} from 'angular2/core';

@Component({
   selector: 'my-first-component',
   template: `
        <section>
            <h2>My First Component</h2>
            <p>My name is <span [style.color]="'red'">{{name}}</span></p>
            <br/>
            <input [(ngModel)]="name" placeholder="type your name"/>
            <br/>
            <input [value]="name" [placeholder]="name === ''
                ? 'this is property binding'
                : name" readonly="true"/>
            <br/>
            <button (click)="myClick()">click me</button>
            <br/>
            <input (keyup)="mykeyup(inputElement.value)" #inputElement placeholder="type something"/>
            <p>{{values}}</p>
        </section>
   `
})
export class MyFirstComponent {
    name: string;
    values: string;
    myClick: any;

    constructor() {
        this.name = 'Alex';
        this.values = '';

        // arrow function
        this.myClick = () => alert('clicked');
    }

    // prototype
    mykeyup(value: string) {
        this.values += value +' | ';
    }
}

