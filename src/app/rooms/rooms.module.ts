import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomsRoutingModule } from './rooms-routing.module';
import {ListRoomsComponent} from './list-rooms/list-rooms.component';
import {AddClassroomComponent} from './add-classroom/add-classroom.component';
import {FormsModule} from '@angular/forms';
import {NgSelectModule} from '@ng-select/ng-select';

@NgModule({
  declarations: [
    ListRoomsComponent,
    AddClassroomComponent
  ],
  imports: [
    CommonModule,
    RoomsRoutingModule,
    FormsModule,
    NgSelectModule
  ]
})
export class RoomsModule { }
