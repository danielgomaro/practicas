import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { MessagesComponent } from './messages/messages.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { AppRoutingModule } from './app-routing.module';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider'
import {MatIconModule} from "@angular/material/icon";
import {NgxPaginationModule} from "ngx-pagination";
import {MatNativeDateModule} from '@angular/material/core';
import {MatBadgeModule} from "@angular/material/badge";
import {MatDialogModule} from "@angular/material/dialog";
import { DialogComponent, DialogComponentDialog } from './dialog/dialog.component';
import {MatDividerModule} from "@angular/material/divider";
import {FlexLayoutModule} from "@angular/flex-layout";
import { HeroAddComponent } from './hero-add/hero-add.component';
import {MatChipsModule} from '@angular/material/chips';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {CdkMenuModule} from '@angular/cdk/menu';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatToolbarModule} from "@angular/material/toolbar";
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatSliderModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false}
    ),
    MatIconModule,
    NgxPaginationModule,
    MatNativeDateModule,
    MatBadgeModule,
    MatDialogModule,
    MatDividerModule,
    FlexLayoutModule,
    MatChipsModule,
    DragDropModule,
    CdkMenuModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    MatToolbarModule


  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    HeroSearchComponent,
    DialogComponent,
    DialogComponentDialog,
    HeroAddComponent

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
