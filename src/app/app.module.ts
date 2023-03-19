import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/inMemoryDataService';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableResolverComponent } from './table-resolver/table-resolver.component';
import { TableWithoutResolverComponent } from './table-without-resolver/table-without-resolver.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    TableResolverComponent,
    TableWithoutResolverComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 4000 })
  ],
  exports: [
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
