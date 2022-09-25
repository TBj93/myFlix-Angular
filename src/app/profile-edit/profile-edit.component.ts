import { Component, OnInit, Input } from '@angular/core';
import { FetchApiDataService } from '../fetch-api-data.service';
 import { MatDialogRef } from '@angular/material/dialog';
 import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss']
})
export class ProfileEditComponent implements OnInit {

  @Input() userData: any = {};

  constructor(

    public fetchApiData: FetchApiDataService,
    public dialogRef: MatDialogRef<ProfileEditComponent>,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  /**
   *  Update Account 
   * @function userEdit
   * @param this.userData
   * @returns Account objcect
   */
  UpdateAccount(): void {
    this.fetchApiData
      .userEdit(this.userData)
      .subscribe((res) => {
        this.dialogRef.close();
        //updating the localstorage with the updated user
        localStorage.clear;
        this.snackBar.open('Account updated ', '', {
          duration: 2000,
        });
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      });
  }

}