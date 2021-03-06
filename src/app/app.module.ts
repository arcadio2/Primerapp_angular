import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms' 
import {HttpClientModule} from '@angular/common/http'; 
import { RouterModule, Route } from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorld } from './primercomponente/primer.component';
import { HolaMundoComponent } from './hola-mundo/hola-mundo.component';
import { UserComponent } from './user/user.component';
import { DataService } from './data.service';
import { AboutComponent } from './about/about.component'; 

const routes: Route[] = [
  {path:'',component:UserComponent},
  {path:'about', component: AboutComponent}
];
//export const routing = RouterModule.forRoot(routes);
@NgModule({
  declarations: [
    AppComponent,
    HelloWorld,
    HolaMundoComponent,
    UserComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
