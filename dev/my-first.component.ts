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
   `
})
export class MyFirstComponent {
    name: string;

    constructor() {
        this.name = 'Alex';
    }
}

