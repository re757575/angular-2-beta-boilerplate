import {Component} from 'angular2/core';
import {MyFormComponent} from './my-form.component';

@Component({
    selector: 'my-app',
    template: `
        <h1>Angular 2 Boilerplate</h1>
        <my-form></my-form>
    `,
    directives: [MyFormComponent]
})
export class AppComponent {
}
