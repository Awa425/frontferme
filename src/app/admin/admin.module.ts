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
import { FormsModule } from '@angular/forms';
import { UpdateAnimalComponent } from './modules/animals/update-animal/update-animal.component';
import { LoginComponent } from './components/login/login.component';
import { EmployeComponent } from './components/employe/employe.component';
import { AddEmployeComponent } from './components/employe/add-employe/add-employe.component';
import { VeterinaireComponent } from './components/veterinaire/veterinaire.component';
import { AddVeterinaireComponent } from './components/veterinaire/add-veterinaire/add-veterinaire.component';
import { UpdateVeterinaireComponent } from './components/veterinaire/update-veterinaire/update-veterinaire.component';
import { UpdateUpdateEmployeComponent } from './components/employe/update-update-employe/update-update-employe.component';
import { HttpClientModule } from '@angular/common/http';

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
    LoginComponent,
    EmployeComponent,
    AddEmployeComponent,
    VeterinaireComponent,
    AddVeterinaireComponent,
    UpdateVeterinaireComponent,
    UpdateUpdateEmployeComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    AnimalsModule,
    FormsModule,
    HttpClientModule,
  ],
})
export class AdminModule {}
