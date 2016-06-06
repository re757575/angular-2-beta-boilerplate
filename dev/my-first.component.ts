import {Component} from 'angular2/core';

@Component({
   selector: 'my-first-component',
   template: `
        <h1>My First Component</h1>
        <span>My name is {{name}} !</span>
   `
})
export class MyFirstComponent {
    name: string;

    constructor() {
        this.name = 'Alex';
    }
}
