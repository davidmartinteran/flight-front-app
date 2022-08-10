import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightsListComponent } from './components/flights-list/flights-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { FlightsComponent } from './pages/flights/flights.component';
import { FlightsPageComponent } from './pages/flights/flights-page/flights-page.component';
import { SharedModule } from '../shared/shared.module';
import { PortalModule } from '../portal/portal.module';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    FlightsComponent,
    FlightsListComponent,
    FlightsPageComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatSortModule,
    SharedModule,
    PortalModule,
    MatIconModule,
    TranslateModule
  ],
  exports: [
    FlightsListComponent
  ]
})
export class FlightsModule { }
