import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FarmingPraticeComponent } from './farming-pratice/farming-pratice.component';
import { NewsComponent } from './news/news.component';
import { ContactComponent } from './contact/contact.component';
import { ListAnimalComponent } from './admin/modules/animals/list-animal/list-animal.component';

const routes: Routes = [
  /* Home Route */
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'farmingPratice', component: FarmingPraticeComponent },
  { path: 'news', component: NewsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'animals', component: ListAnimalComponent },

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
