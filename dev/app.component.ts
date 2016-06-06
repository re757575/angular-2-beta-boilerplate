import {Component} from 'angular2/core';
import {MyFirstComponent} from './my-first.component';

@Component({
    selector: 'my-app',
    template: `
        <h1>Angular 2 Boilerplate</h1>
        <p>Hello World!</p>
        <my-first-component></my-first-component>
    `,
    directives: [MyFirstComponent]
})
export class AppComponent {

}
