import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from  '@angular/forms';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { from } from 'rxjs';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CapitalizePipe } from './capitalize.pipe';
import { MenuComponent } from './menu/menu.component';
import { MyblogsComponent } from './myblogs/myblogs.component';
import { ProfileComponent } from './profile/profile.component';
import { CreateComponent } from './create/create.component';
import { NgxEditorModule } from 'ngx-editor';
import { HttpClientModule } from '@angular/common/http';


let firebaseConfig = {
  apiKey: "AIzaSyADhOFzHYyame3clP3YoGHjy81b8ia5pDc",
  authDomain: "scribe-14dd8.firebaseapp.com",
  databaseURL: "https://scribe-14dd8.firebaseio.com",
  projectId: "scribe-14dd8",
  storageBucket: "scribe-14dd8.appspot.com",
  messagingSenderId: "384421524591",
  appId: "1:384421524591:web:222ed0b69d2b3a3e4f899a",
  measurementId: "G-GF7WEMXYC8"
};
firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [
  AppComponent,
  SignupComponent,
  LoginComponent,
  HomeComponent,
  CapitalizePipe,
  MenuComponent,
  MyblogsComponent,
  ProfileComponent,
  CreateComponent
  ],
  imports: [
  BrowserModule,
  FormsModule,
  ReactiveFormsModule,
  AppRoutingModule,
  NgxEditorModule,
  HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  })
  



export class AppModule { }
