import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListOrganismsComponent} from './list-organisms/list-organisms.component';
import {AddOrganismComponent} from './add-organism/add-organism.component';

const routes: Routes = [
  {path: '', component: ListOrganismsComponent},
  {path: 'add', component: AddOrganismComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrganismsRoutingModule {
}
