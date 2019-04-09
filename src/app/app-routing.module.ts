import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {LoginComponent} from './login/login.component';
import {LayoutComponent} from './layout/layout.component';
import {ListRoomsComponent} from './list-rooms/list-rooms.component';
import {AddClassroomComponent} from './add-classroom/add-classroom.component';
import {ListTypesComponent} from './list-types/list-types.component';
import {ListOrganismsComponent} from './list-organisms/list-organisms.component';
import {AddOrganismComponent} from './add-organism/add-organism.component';


export const AppRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'add-classroom',
        component: AddClassroomComponent
      }, {
        path: 'list-rooms',
        component: ListRoomsComponent
      },{
        path: 'add-organism',
        component: AddOrganismComponent
      },{
        path: 'list-organisms',
        component: ListOrganismsComponent
      }, {
        path: 'list-types',
        component:ListTypesComponent
      }
    ]
  }, {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(AppRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
