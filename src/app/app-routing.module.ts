import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlightsListComponent } from './flights/components/flights-list/flights-list.component';
import { FlightsPageComponent } from './flights/pages/flights/flights-page/flights-page.component';
import { SearchFormComponent } from './shared/components/search-form/search-form.component';

const routes: Routes = [
  { path: 'search', component: SearchFormComponent},
  { path: 'list', component: FlightsListComponent},
  { path: 'flights', component: FlightsPageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
