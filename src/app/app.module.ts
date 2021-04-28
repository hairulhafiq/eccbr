import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
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
import { MainComponent } from './Main/Main.component';
import { FooterComponent } from './footer/footer.component';
import { MatDialogModule } from '@angular/material/dialog';
import { Bank_in_dialogComponent } from './bank_in_dialog/bank_in_dialog.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { Locum_expensesComponent } from './locum_expenses/locum_expenses.component';
import { Daily_salesComponent } from './daily_sales/daily_sales.component';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validator } from '@angular/forms';
import { Common_expensesComponent } from './common_expenses/common_expenses.component';
import { Reimbursement_requisitionComponent } from './reimbursement_requisition/reimbursement_requisition.component';

@NgModule({
  declarations: [		
    AppComponent,
    MainComponent,
    FooterComponent,
    Bank_in_dialogComponent,
    Locum_expensesComponent,
    Daily_salesComponent,
      Common_expensesComponent,
      Reimbursement_requisitionComponent
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
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
