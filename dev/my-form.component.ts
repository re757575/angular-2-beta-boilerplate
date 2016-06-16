import {Component} from 'angular2/core';

@Component({
    selector: 'my-form',
    template: `
        <form (ngSubmit)="onSubmit(f)" #f="ngForm">
            <div>
                <label for="email">Email</label>
                <input ngControl="email" type="text" id="email" required #email="ngForm">
                <span *ngIf="!email.valid">Not valid</span>
            </div>
            <div>
                <label for="password">Password</label>
                <input ngControl="password" type="password" id="password" required 
                    #password="ngForm">
                <span *ngIf="!password.valid">Not valid</span>
            </div>
            <div>
                <label for="confirm-password">Confirm Password</label>
                <input ngControl="confirm-password" type="password" id="confirm-password" required
                    #confirmPassword="ngForm">
                <span *ngIf="!confirmPassword.valid">Not valid</span>
            </div>
            <button type="submit" [disabled]="!f.valid || password.value !== confirmPassword.value">
                Submit
            </button>
        </form>
        <h2>You submited</h2>
        <div>Email: {{user.eamil}}</div>
        <div>Password: {{user.password}}</div>
    `
})
export class MyFormComponent {
    user = {eamil: '', password: ''};

    onSubmit(form) {
        this.user.eamil = form.value.email;
        this.user.password = form.value.password;
    }
}
