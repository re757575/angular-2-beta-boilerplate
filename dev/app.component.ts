import {Component} from 'angular2/core';
import {MyFirstComponent} from './my-first.component';
import {HighLightDirective} from './highligth.driectives';
import {StructuralDirectives} from './structural-directives';


@Component({
    selector: 'my-app',
    template: `
        <h1 [myHighligth]="'blue'">Angular 2 Boilerplate</h1>
        <p [myHighligth]="'red'">Hello World!</p>
        <input [(ngModel)]="componentTitle" placeholder="type title"/>
        <br/>
        <br/>
        <my-first-component [myTitle]="componentTitle" (nameChanged)="name = $event">
        </my-first-component>
        <h3 myHighligth>Your name is {{name}}</h3>
        <structural-directives></structural-directives>
    `,
    directives: [MyFirstComponent, HighLightDirective, StructuralDirectives]
})
export class AppComponent {
    componentTitle = 'My First Component';
    name = '';
}
