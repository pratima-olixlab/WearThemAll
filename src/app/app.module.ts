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
import { AdminComponent } from './admin/admin.component';
import { UsersComponent } from './admin/components/users/users.component';
import { UserAddComponent } from './admin/components/users/user-add/user-add.component';
import { ProductOrdersComponent } from './admin/components/product-orders/product-orders.component';
import { OrdersDeclineComponent } from './admin/components/product-orders/orders-decline/orders-decline.component';
import { OrdersAcceptedComponent } from './admin/components/product-orders/orders-accepted/orders-accepted.component';
import { HeadersComponent } from './admin/components/header/headers.component';
import { AdminSubCategoryComponent } from './admin/components/admin-subcategory/admin-subcategory.component';
import { SubcategoryDetailsComponent } from './admin/components/admin-subcategory/subcategory-details/subcategory-details.component';
import { AdminProductComponent } from './admin/components/admin-product/admin-product.component';
import { CategoryProductComponent } from './admin/components/admin-category/category-main/category-product.component';
import { CategoryDetailsComponent } from './admin/components/admin-category/category-details/category-details.component';
import { HomeDialogComponent } from './home-dialog/home-dialog.component';
import { BuyProductComponent } from './buy-product/buy-product.component';
import { OrdersComponent } from './buy-product/orders/orders.component';
import { MiniOrdersComponent } from './buy-product/orders/mini-orders/mini-orders.component';
import { AuthComponent } from './auth/auth.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { AddressComponent } from './auth/address/address.component';
import { AddressHomeComponent } from './auth/address-home/address-home.component';
import { AddressAddsComponent } from './auth/address-adds/address-adds.component';
import { AdminRoutingModule } from './admin/admin-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    HomeStartComponent,
    ProductComponent,
    ProductDetailsComponent,
    ProductHomeComponent,
    AdminComponent,
    UsersComponent,
    UserAddComponent,
    ProductOrdersComponent,
    OrdersDeclineComponent,
    OrdersAcceptedComponent,
    HeadersComponent,
    AdminSubCategoryComponent,
    SubcategoryDetailsComponent,
    AdminProductComponent,
    CategoryProductComponent,
    CategoryDetailsComponent,
    HomeDialogComponent,
    ProductOrdersComponent,
    BuyProductComponent,
    OrdersComponent,
    MiniOrdersComponent,
    AuthComponent,
    ForgotPasswordComponent,
    AddressComponent,
    AddressHomeComponent,
    AddressAddsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AdminRoutingModule,
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