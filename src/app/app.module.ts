import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router'; // CLI imports router
const routes: Routes = [
  { path: 'app-home', component: HomeComponent },
  { path: 'app-albums', component: AlbumsComponent },
  { path: 'app-about', component: AboutComponent }
  ]; 

import { AppComponent } from './app.component';

import { HomeComponent } from './shared/home/home.component';

import { AlbumsModule } from './modules/albums/albums.module';
import { AboutComponent } from './shared/about/about.component'
import { AlbumsComponent } from './modules/albums/components/albums/albums.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule, AlbumsModule, RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class AppRoutingModule { }

