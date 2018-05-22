import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import {BackendService} from './shared/backend.service';
import {HttpClientModule} from '@angular/common/http';
import {SearchComponent} from './components/search/search.component';
import {DataService} from './shared/data.service';
import {RaportComponent} from './components/raport/raport.component';
import {RaportListComponent} from './components/raport-list/raport-list.component';
import {Route, RouterModule} from '@angular/router';
import {HeaderComponent} from './components/header/header.component';

const appRoutes: Route[] = [
  {path: '', component: SearchComponent},
  {path: 'raports', component: RaportListComponent},
  {path: '*', redirectTo: ''}
];

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    RaportComponent,
    RaportListComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [
    BackendService,
    DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
