import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-edit-locexp',
  templateUrl: './add-edit-locexp.component.html',
  styleUrls: ['./add-edit-locexp.component.css']
})
export class AddEditLocexpComponent implements OnInit {

  constructor(private service: SharedService, public dialogRef: MatDialogRef<AddEditLocexpComponent>) { }

  // @Input() loc: any;
  // ExpensesLocumName: any = String;
  // ExpensesLocumIC: any = String;
  // ExpensesLocumPayment: any = String;
  // ExpensesLocumRemark: any = String;

  ngOnInit(): void {

    // this.ExpensesLocumName = this.loc.ExpensesLocumName;
    // this.ExpensesLocumIC = this.loc.ExpensesLocumIC;
    // this.ExpensesLocumPayment = this.loc.ExpensesLocumPayment;
    // this.ExpensesLocumRemark = this.loc.ExpensesLocumRemark;

  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  addlocum() {

  }

}
