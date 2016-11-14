import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { userModel } from '../models/user.model'

@Component({
    moduleId: module.id,
    selector: 'child-component',
    templateUrl: '../templates/child.component.html'
})
export class ChildComponent implements OnInit {
    @Input() childUser:userModel;
    
    constructor(myElement: ElementRef) { 
        console.log(myElement);
    }

    ngOnInit() {
        console.log('start');
     }
}