import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutes} from './app-routing.module';
import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {SidebarModule} from './sidebar/sidebar.module';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {UserService} from './shared/services/user.service';
import {FormsModule} from '@angular/forms';
import {FileService} from './shared/services/file.service';
import {LoginComponent} from './login/login.component';
import {LayoutComponent} from './layout/layout.component';
import {OrganismeService} from './shared/services/organisme.service';
import {ReservationService} from './shared/services/reservation.service';
import {SalleService} from './shared/services/salle.service';
import {TypeOrganismeService} from './shared/services/type-organisme.service';
import {TypeSalleService} from './shared/services/type-salle.service';
import {ListTypesComponent} from './list-types/list-types.component';
import {NgSelectModule} from '@ng-select/ng-select';
import {ListReservationsComponent} from './list-reservations/list-reservations.component';
import {ListAccountsComponent} from './list-accounts/list-accounts.component';
import { CalendarComponent } from './calendar/calendar.component';
import {FullCalendarModule} from '@fullcalendar/angular';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    LayoutComponent,
    ListTypesComponent,
    ListReservationsComponent,
    ListAccountsComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
    HttpClientModule,
    SidebarModule,
    FormsModule,
    NgSelectModule,
    FullCalendarModule
  ],
  providers: [UserService,
    FileService,
    OrganismeService,
    ReservationService,
    SalleService,
    TypeOrganismeService,
    TypeSalleService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
