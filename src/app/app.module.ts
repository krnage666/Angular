import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AffichageComponent } from './Components/affichage/affichage.component';
import { UpdateComponent } from './Components/update/update.component';
import { AddComponent } from './Components/add/add.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { ImageUploadComponent } from './Components/image-upload/image-upload.component';
import { RessourceListComponent } from './Components/ressource-list/ressource-list.component';
import { RessourceDetailComponent } from './Components/ressource-detail/ressource-detail.component';
import { RessourceFormComponent } from './Components/ressource-form/ressource-form.component';



@NgModule({
  declarations: [
    AppComponent,
    AffichageComponent,
    UpdateComponent,
    AddComponent,
    NavBarComponent,
    ImageUploadComponent,
    HomeComponent,
    RessourceListComponent,
    RessourceDetailComponent,
    RessourceFormComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
