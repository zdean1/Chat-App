import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, delay } from 'rxjs/operators';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFire } from '@angular/fire/firebase-node';
import * as firebase from 'firebase/app';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;

  redirectUrl: string;
  
  constructor(public angularFireAuth: AngularFireAuth) {
    firebase.initializeApp(environment.firebase);
   }

  login(email: string, password: string) {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }

  logout() {
    return firebase.auth().signOut();    
  }

  setLoggedIn() {
    this.isLoggedIn = true;
  }

  setLoggedOut() {
    this.isLoggedIn = false;
  }
}
