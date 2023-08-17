import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FarmingPraticeComponent } from './farming-pratice/farming-pratice.component';
import { NewsComponent } from './news/news.component';
import { ContactComponent } from './contact/contact.component';
import { ListAnimalComponent } from './admin/modules/animals/list-animal/list-animal.component';
import { VeterinaireComponent } from './admin/components/veterinaire/veterinaire.component';
import { FermeComponent } from './admin/components/ferme/ferme.component';
import { CapteurComponent } from './admin/components/capteur/capteur.component';
import { DetailComponent } from './admin/components/capteur/detail/detail.component';
import { AddComponent } from './admin/components/capteur/add/add.component';
import { UpdateComponent } from './admin/components/capteur/update/update.component';
import { MaladieComponent } from './maladie/maladie.component';
import { AddMaladieComponent } from './maladie/add-maladie/add-maladie.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  /* Home Route */
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'farmingPratice', component: FarmingPraticeComponent },
  { path: 'news', component: NewsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'animals', component: ListAnimalComponent },
  { path: 'veterinaires', component: VeterinaireComponent },
  { path: 'fermes', component: FermeComponent },
  { path: 'maladies', component: MaladieComponent },
  { path: 'admin/maladies/add', component: AddMaladieComponent },
  { path: 'capteurs', component: CapteurComponent },
  { path: 'capteurs/:id', component: DetailComponent },
  { path: 'admin/capteurs/add', component: AddComponent },
  { path: 'admin/capteurs/update/:id', component: UpdateComponent },
  { path: 'login', component: LoginComponent },

  /* Admin Route */
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin-routing.module').then((m) => m.AdminRoutingModule),
  },

  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
