import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'client-component',
    templateUrl: '../templates/client.component.html'
})
export class ClientComponent implements OnInit {
    requiredUserName:boolean;
    UserName:string;
    constructor() { }

    ngOnInit() { 
        this.requiredUserName = true;
    }

    onSubmit(val:any) {
        console.log(val);
        if (val){
            console.log(this.UserName);
        }         
    }
}