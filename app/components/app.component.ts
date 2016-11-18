import { Component } from '@angular/core';
import { userService } from '../services/user.service'
import { userModel } from '../models/user.model'
import { ChildComponent } from './app.child.component'

@Component({
  selector: 'my-app',
  templateUrl: '../app/templates/user.template.html',
  providers: [ userService ]  
})

export class AppComponent { 
  users:userModel[];
  selectedUser:userModel;

  constructor(private serv:userService) {

  }

  getUsers ():void {
    this.serv.userAll().subscribe(h => { 
      this.users = h; 
    }, err => {
      console.log(err)
    });    
  }

  getAll ():void {
    this.serv.login().subscribe(h => { 
      console.log(h) 
    }, err => {
      console.log(err)
    });
  }

  setUser (event:any, user:userModel):void {
    this.selectedUser = user;
  }
}


