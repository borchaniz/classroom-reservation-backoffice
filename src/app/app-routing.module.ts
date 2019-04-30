import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {LoginComponent} from './login/login.component';
import {LayoutComponent} from './layout/layout.component';
import {ListTypesComponent} from './list-types/list-types.component';
import {ListReservationsComponent} from './list-reservations/list-reservations.component';
import {ListAccountsComponent} from './list-accounts/list-accounts.component';
import {CalendarComponent} from './calendar/calendar.component';


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
      }, {
        path: 'calendar',
        component: CalendarComponent
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
