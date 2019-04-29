import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListRoomsComponent} from './list-rooms/list-rooms.component';
import {AddClassroomComponent} from './add-classroom/add-classroom.component';

const routes: Routes = [
  {path: '', component: ListRoomsComponent},
  {path: 'add', component: AddClassroomComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoomsRoutingModule {
}
