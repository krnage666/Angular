import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AddComponent } from './Components/add/add.component';
import { ImageUploadComponent } from './Components/image-upload/image-upload.component';
import { AffichageComponent } from './Components/affichage/affichage.component';
import { UpdateComponent } from './Components/update/update.component';
import { HomeComponent } from './home/home.component';
import { RessourceListComponent } from './Components/ressource-list/ressource-list.component';
import { RessourceDetailComponent } from './Components/ressource-detail/ressource-detail.component';
import { RessourceFormComponent } from './Components/ressource-form/ressource-form.component';

const routes: Routes = [

  {path: 'upload', component: ImageUploadComponent},
  {path: 'add', component: AddComponent},
  {path: 'affichage', component: AffichageComponent},
  {path: 'update', component: UpdateComponent},
  {path: 'home', component: HomeComponent},
  {path: 'ressource-list' , component:RessourceListComponent},
  {path: 'ressource-detail' , component:RessourceDetailComponent},
  {path: 'ressource-form' , component:RessourceFormComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
