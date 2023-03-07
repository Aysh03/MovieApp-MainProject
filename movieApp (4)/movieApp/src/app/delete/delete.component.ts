import { Component } from '@angular/core';
 import { MatDialogRef } from '@angular/material/dialog';
import { AdminDashboardComponent } from '../admin-dashboard/admin-dashboard.component';


@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent {
constructor(public dialogRef: MatDialogRef<DeleteComponent>){
}
onNoClick(): void { this.dialogRef.close(); } 



}
