import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DesignComponent } from './design/design.component';
import { RecentsComponent } from './recents/recents.component';
import { SpecialsComponent } from './specials/specials.component';
import { LocationsComponent } from './locations/locations.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'design', component: DesignComponent },
  { path: 'recente', component: RecentsComponent },
  { path: 'specialitati', component: SpecialsComponent },
  { path: 'locatii', component: LocationsComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
