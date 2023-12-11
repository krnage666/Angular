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


@NgModule({
  declarations: [
    AppComponent,
    AffichageComponent,
    UpdateComponent,
    AddComponent,
    NavBarComponent,
    ImageUploadComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
