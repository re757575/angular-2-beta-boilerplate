import {Component} from 'angular2/core';
import {MyFirstComponent} from './my-first.component';

@Component({
    selector: 'my-app',
    template: `
        <h1>Angular 2 Boilerplate</h1>
        <p>Hello World!</p>
        <input [(ngModel)]="componentTitle" placeholder="type title"/>
        <br/>
        <br/>
        <my-first-component [myTitle]="componentTitle" (nameChanged)="name = $event">
        </my-first-component>
        <h3> Your name is {{name}}<h3>
    `,
    directives: [MyFirstComponent]
})
export class AppComponent {
    componentTitle = 'My First Component';
    name = '';
}
