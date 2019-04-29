import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrganismsRoutingModule } from './organisms-routing.module';
import {AddOrganismComponent} from './add-organism/add-organism.component';
import {ListOrganismsComponent} from './list-organisms/list-organisms.component';
import {FormsModule} from '@angular/forms';
import {NgSelectModule} from '@ng-select/ng-select';

@NgModule({
  declarations: [
    AddOrganismComponent,
    ListOrganismsComponent
  ],
  imports: [
    CommonModule,
    OrganismsRoutingModule,
    FormsModule,
    NgSelectModule
  ]
})
export class OrganismsModule { }
