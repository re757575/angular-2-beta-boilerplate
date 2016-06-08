import {Directive, ElementRef, OnInit, Renderer} from 'angular2/core';

@Directive({
    selector: '[myHighligth]',
    inputs: ['highlightColor:myHighligth'] // property binding
})
export class HighLightDirective {
    private _defaultColor = 'green';
    private highlightColor: string;

    // constructor(private _elRef: ElementRef) {
    //     this._elRef = _elRef;
    // }

    // ngOnInit(): any {
    //      this._elRef.nativeElement.style.backgroundColor = this._defaultColor;
    // }

    constructor(private _elRef: ElementRef, private _renderer: Renderer) {}

    ngOnInit(): any {
        this._renderer.setElementStyle(this._elRef.nativeElement,
            'backgroundColor', this.highlightColor || this._defaultColor);
    }
}
