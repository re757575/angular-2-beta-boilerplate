import { Component } from 'angular2/core';

@Component({
    selector: 'structural-directives',
    template: `
        <section>
            <h2>*ngIf</h2>
            <div>
                Enter a number higher than 10
                <br/>
                <input type="text" #unmber (keyup)="0"/>
            </div>
            <div *ngIf="unmber.value > 10">
                <h5>heading</h5>
                Number higher than 10
            </div>
        </section>
        <section>
            <h2>*ngFor</h2>
            <div>
                <ul>
                    <li *ngFor="let item of list, let i = index">{{i}}. {{item}}</li>
                </ul>
            </div>
        </section>
    `
})
export class StructuralDirectives {
    list = ['apple', 'milk', 'cookie'];
}
