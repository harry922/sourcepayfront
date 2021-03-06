import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RoutingModule } from './routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DateValueAccessorModule } from 'angular-date-value-accessor/src';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CandidatesComponent } from './candidates/candidates.component';
import { CandidatesDetailComponent } from './candidates/candidates-detail/candidates-detail.component';
import { CandidatesListComponent } from './candidates/candidates-list/candidates-list.component';
import { CandidatesItemComponent } from './candidates/candidates-list/candidates-item/candidates-item.component';
import { CandidateEditComponent } from './candidates/candidate-edit/candidate-edit.component';
import { CandidateStartComponent } from './candidates/candidate-start/candidate-start.component';
import { PvComponent } from './candidates/candidates-detail/pv/pv.component';
import { SvComponent } from './candidates/candidates-detail/sv/sv.component';
import { PaidComponent } from './candidates/candidates-detail/paid/paid.component';
import { SiempComponent } from './candidates/candidates-detail/siemp/siemp.component';
import { EmployeesComponent } from './employees/employees.component';
import { CandidateService } from './candidates/candidate.service';
import { DataStorageService } from './candidates/data-storage.service';
import { DropdownDirective } from './shared/dropdown.directive';
import { UtcDatePipe } from './shared/utcdate.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CandidatesComponent,
    CandidatesDetailComponent,
    CandidatesListComponent,
    CandidatesItemComponent,
    CandidateEditComponent,
    CandidateStartComponent,
    PvComponent,
    SvComponent,
    PaidComponent,
    SiempComponent,
    DropdownDirective,
    EmployeesComponent,
    UtcDatePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RoutingModule,
    HttpModule,
    DateValueAccessorModule

  ],
  providers: [CandidateService, DataStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
