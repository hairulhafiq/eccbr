import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SharedService } from './shared/shared.service';
import { SharedDataService } from './shared/sharedData.service';

import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './Main/Main.component';
import { FooterComponent } from './footer/footer.component';
import { Bank_in_dialogComponent } from './bank_in_dialog/bank_in_dialog.component';
import { Locum_expensesComponent } from './locum_expenses/locum_expenses.component';
// import { Daily_salesComponent } from './daily_sales/daily_sales.component';
import { Common_expensesComponent } from './common_expenses/common_expenses.component';
import { Reimbursement_requisitionComponent } from './reimbursement_requisition/reimbursement_requisition.component';
import { AddEditLocexpComponent } from './locum_expenses/add-edit-locexp/add-edit-locexp.component';
import { LoginComponent } from './login/login.component';
import { Submit_bank_slipComponent } from './bank_in_dialog/submit_bank_slip/submit_bank_slip.component';
import { RemarkComponent } from './Remark/Remark.component';
import { CheckingclosingbankingComponent } from './Checkingclosingbanking/Checkingclosingbanking.component';
import { Ask_bankinComponent } from './bank_in_dialog/ask_bankin/ask_bankin.component';

import { MatPaginatorModule } from '@angular/material/paginator';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { NgxWebstorageModule } from 'ngx-webstorage';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FooterComponent,
    Bank_in_dialogComponent,
    Locum_expensesComponent,
    // Daily_salesComponent,
    Common_expensesComponent,
    Reimbursement_requisitionComponent,
    AddEditLocexpComponent,
    LoginComponent,
    Submit_bank_slipComponent,
    RemarkComponent,
    CheckingclosingbankingComponent,
    Ask_bankinComponent,
  ],
  entryComponents: [Bank_in_dialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatDatepickerModule,
    MatIconModule,
    MatDialogModule,
    MatPaginatorModule,
    MatTableModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    MatCardModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatListModule,
    NgxWebstorageModule
  ],
  providers: [SharedService, SharedDataService],
  bootstrap: [AppComponent],
})
export class AppModule { }
