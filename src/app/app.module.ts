import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { ChartsModule } from 'ng2-charts';
import { Chart1Component } from './components/charts/chart1/chart1.component';
import { Chart2Component } from './components/charts/chart2/chart2.component';
import { Chart3Component } from './components/charts/chart3/chart3.component';
import { Chart4Component } from './components/charts/chart4/chart4.component';
@NgModule({
  declarations: [AppComponent, HeaderComponent, DashboardComponent, Chart1Component, Chart2Component, Chart3Component, Chart4Component],
  imports: [BrowserModule, AppRoutingModule, ChartsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
