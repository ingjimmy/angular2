import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component'
import { ChildComponent } from './app.child.component'
import { AutoFocusDirective } from '../directives/autofocus.directive'
import { ClientComponent } from './app.client.component'
import { CompanyComponent } from './app.company.component'

@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: ClientComponent},
      {path:'client', component: ClientComponent },
      {path:'company', component: CompanyComponent }
    ]) 
  ],
  declarations: [ AppComponent, ChildComponent, AutoFocusDirective, ClientComponent, CompanyComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
