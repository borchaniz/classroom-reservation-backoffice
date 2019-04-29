import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {LoginComponent} from './login/login.component';
import {LayoutComponent} from './layout/layout.component';
import {ListTypesComponent} from './list-types/list-types.component';
import {ListOrganismsComponent} from './organisms/list-organisms/list-organisms.component';
import {AddOrganismComponent} from './organisms/add-organism/add-organism.component';
import {ListReservationsComponent} from './list-reservations/list-reservations.component';
import {ListAccountsComponent} from './list-accounts/list-accounts.component';


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
        path: 'room',
        loadChildren: './rooms/rooms.module#RoomsModule'
      }, {
        path: 'organism',
        loadChildren: './organisms/organisms.module#OrganismsModule'
      }, {
        path: 'list-types',
        component: ListTypesComponent
      }, {
        path: 'list-reservations',
        component: ListReservationsComponent
      }, {
        path: 'list-accounts',
        component: ListAccountsComponent
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
