import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderMobileComponent } from './components/header-mobile/header-mobile.component';
import { PageContainsComponent } from './components/page-contains/page-contains.component';
import { HeaderDesktopComponent } from './components/header-desktop/header-desktop.component';
import { ListAnimalComponent } from './modules/animals/list-animal/list-animal.component';
import { AddAnimalComponent } from './modules/animals/add-animal/add-animal.component';
import { AnimalsModule } from './modules/animals/animals.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateAnimalComponent } from './modules/animals/update-animal/update-animal.component';
import { EmployeComponent } from './components/employe/employe.component';
import { AddEmployeComponent } from './components/employe/add-employe/add-employe.component';
import { VeterinaireComponent } from './components/veterinaire/veterinaire.component';
import { AddVeterinaireComponent } from './components/veterinaire/add-veterinaire/add-veterinaire.component';
import { UpdateVeterinaireComponent } from './components/veterinaire/update-veterinaire/update-veterinaire.component';
import { UpdateUpdateEmployeComponent } from './components/employe/update-update-employe/update-update-employe.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '../app-routing.module';
import { FermeComponent } from './components/ferme/ferme.component';
import { CapteurComponent } from './components/capteur/capteur.component';
import { DetailComponent } from './components/capteur/detail/detail.component';
import { AddComponent } from './components/capteur/add/add.component';
import { UpdateComponent } from './components/capteur/update/update.component';

@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    FooterComponent,
    SidebarComponent,
    HeaderMobileComponent,
    PageContainsComponent,
    HeaderDesktopComponent,
    ListAnimalComponent,
    AddAnimalComponent,
    UpdateAnimalComponent,
    EmployeComponent,
    AddEmployeComponent,
    VeterinaireComponent,
    AddVeterinaireComponent,
    UpdateVeterinaireComponent,
    UpdateUpdateEmployeComponent,
    FermeComponent,
    CapteurComponent,
    DetailComponent,
    AddComponent,
    UpdateComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AdminRoutingModule,
    AnimalsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
  ],
})
export class AdminModule {}
