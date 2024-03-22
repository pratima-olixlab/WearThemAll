import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MaterialComponentsModule } from './material-component.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { HomeStartComponent } from './home-start/home-start.component';
// import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
// import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { ProductComponent } from './product/product.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { ProductHomeComponent } from './product-home/product-home.component';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    HomeStartComponent,
    ProductComponent,
    ProductDetailsComponent,
    ProductHomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    MaterialComponentsModule,
    // provideFirebaseApp(() =>
    //   initializeApp({
    //     projectId: 'dresswell-2ad8f',
    //     appId: '1:404538998509:web:ec5ef11bc04214b2bf96e4',
    //     storageBucket: 'dresswell-2ad8f.appspot.com',
    //     authDomain: 'dresswell-2ad8f.firebaseapp.com',
    //     messagingSenderId: '404538998509',
    //     measurementId: 'G-112KGBMR2F',
    //   })
    // ),
    // provideFirestore(() => getFirestore()),
  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}