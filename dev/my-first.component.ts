import {Component} from 'angular2/core';

@Component({
   selector: 'my-first-component',
   template: `
        <h1>My First Component</h1>
        <span>My name is {{name}} !</span>
        <br/>
        <input [(ngModel)]="name" placeholder="type your name"/>
        <br/>
        <input [value]="name" [placeholder]="name === '' 
            ? 'this is property binding'
            : name" readonly="true"/>
        <br/>
        <button (click)="myClick()">click me</button>
        
        <br/><br/>
        <input (keyup)="mykeyup(inputElement.value)" #inputElement placeholder="type something"/>
        <p>{{values}}</p>
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

