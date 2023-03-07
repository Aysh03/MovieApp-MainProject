import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AdminDashboardComponent } from '../admin-dashboard/admin-dashboard.component';
@Component({
  selector: 'app-admin-edit-comp',
  templateUrl: './admin-edit-comp.component.html',
  styleUrls: ['./admin-edit-comp.component.css']
})
export class AdminEditCompComponent {
constructor(private dialogRef:MatDialogRef<AdminEditCompComponent>){}
  onNoClick(): void { this.dialogRef.close(); } 


}
