import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MatButtonModule, MatCardModule, MatCheckboxModule, MatChipsModule, MatDividerModule, MatFormFieldModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatProgressSpinnerModule, MatSelectModule, MatSidenavModule, MatToolbarModule } from '@angular/material';
import { SplashComponent } from './splash/splash.component';
import { HeaderComponent } from './navigation/header/header.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ServicesComponent } from './services/services.component';
import { FlipCardModule } from './flip-card/flip-card.module';
import { ToastrModule } from 'ngx-toastr';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { ContactComponent } from './contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BlogsComponent } from './blogs/blogs.component';
import { AlertModalComponent } from './alert-modal/alert-modal.component';
import { HttpClientModule } from '@angular/common/http';
import { SpinningBlobComponent } from './spinning-blob/spinning-blob.component';
import { ParallaxDirective } from './parallax.directive';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { ProfileComponent } from './profile/profile.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    SplashComponent,
    HeaderComponent,
    SidenavListComponent,
    FooterComponent,
    CarouselComponent,
    ServicesComponent,
    SignupComponent,
    SigninComponent,
    ContactComponent,
    BlogsComponent,
    AlertModalComponent,
    SpinningBlobComponent,
    ParallaxDirective,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatCheckboxModule,
    MatChipsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatSidenavModule,
    MatSelectModule,
    MatDividerModule,
    MatListModule,
    MatMenuModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    FlipCardModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    PerfectScrollbarModule,
    ToastrModule.forRoot({
      timeOut: 2000,
      progressBar: true,
      progressAnimation: 'increasing',
      preventDuplicates: true
    })
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
