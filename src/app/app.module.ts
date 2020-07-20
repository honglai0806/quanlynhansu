import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { DepartmentComponent } from './page/department/department.component';
import { EmployeesComponent } from './page/employees/employees.component';
import { LoginComponent } from './page/login/login.component';
import { RegisterComponent } from './page/register/register.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { MainLeftComponent } from './component/main-left/main-left.component';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DepartmentComponent,
    EmployeesComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    MainLeftComponent
  ],
  imports: [
    BrowserModule,
        AppRoutingModule,
        ModalModule.forRoot(),
        ModalModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
