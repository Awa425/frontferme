import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    FarmingPraticeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
