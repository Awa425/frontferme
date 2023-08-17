import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroEreaComponent } from './hero-erea/hero-erea.component';
import { FermeAvantageComponent } from './ferme-avantage/ferme-avantage.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NewsComponent } from './news/news.component';
import { HomeComponent } from './home/home.component';
import { FarmingPraticeComponent } from './farming-pratice/farming-pratice.component';
import { AdminModule } from './admin/admin.module';
import { MaladieComponent } from './maladie/maladie.component';
import { AddMaladieComponent } from './maladie/add-maladie/add-maladie.component';
import { UpdateMaladieComponent } from './maladie/update-maladie/update-maladie.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    TopHeaderComponent,
    NavbarComponent,
    HeroEreaComponent,
    FermeAvantageComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    NewsComponent,
    HomeComponent,
    FarmingPraticeComponent,
    MaladieComponent,
    AddMaladieComponent,
    UpdateMaladieComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
