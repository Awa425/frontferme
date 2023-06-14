import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageContainsComponent } from './components/page-contains/page-contains.component';
import { ListAnimalComponent } from './modules/animals/list-animal/list-animal.component';
import { AddAnimalComponent } from './modules/animals/add-animal/add-animal.component';
import { UpdateAnimalComponent } from './modules/animals/update-animal/update-animal.component';
import { LoginComponent } from './components/login/login.component';
import { EmployeComponent } from './components/employe/employe.component';
import { AddEmployeComponent } from './components/employe/add-employe/add-employe.component';
import { VeterinaireComponent } from './components/veterinaire/veterinaire.component';
import { AddVeterinaireComponent } from './components/veterinaire/add-veterinaire/add-veterinaire.component';
import { UpdateVeterinaireComponent } from './components/veterinaire/update-veterinaire/update-veterinaire.component';
import { UpdateUpdateEmployeComponent } from './components/employe/update-update-employe/update-update-employe.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'admin/dashboard',
        component: PageContainsComponent,
        // children:[
        //     {path: ':id', component: DetailAdminCommComponent},
        //     {path: ':zone', component: ZoneCommandesComponent},
        //     {path: '', redirectTo: '/admin/commandes', pathMatch: 'full'}
        // ],
      },

      /*Employe routing*/
      {
        path: 'admin/employes',
        component: EmployeComponent,
      },
      { path: 'admin/employes/add', component: AddEmployeComponent },
      {
        path: 'admin/employes/update/:id',
        component: UpdateUpdateEmployeComponent,
      },

      /*Veterinaire Routing*/
      { path: 'admin/veterinaires', component: VeterinaireComponent },
      { path: 'admin/veterinaires/add', component: AddVeterinaireComponent },
      {
        path: 'admin/veterinaires/update/:id',
        component: UpdateVeterinaireComponent,
      },

      /*Animal routing*/
      {
        path: 'admin/animals',
        component: ListAnimalComponent,
      },
      {
        path: 'admin/animals/add',
        component: AddAnimalComponent,
      },
      { path: 'admin/updateAnimal/:id', component: UpdateAnimalComponent },
    ],
  },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/admin/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
