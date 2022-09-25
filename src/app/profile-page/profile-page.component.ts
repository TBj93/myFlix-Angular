import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FetchApiDataService } from '../fetch-api-data.service'
import { MatDialog} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { ProfileEditComponent } from '../profile-edit/profile-edit.component';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {

 

  user: any = {};

  
 
  constructor(public fetchApiData: FetchApiDataService,
    public dialog: MatDialog,
   
    public snackBar: MatSnackBar,
    private router: Router) { }

 /**
   * initializes get user functions
   * @function getUserData
   */
    ngOnInit(): void {
      this.getUserData();

    }

 /**
   * get user data as JSON object
   * @returns user object
   * @function getUser
   */
  getUserData(): void{
  this.fetchApiData.getUser().subscribe((resp: any) => {
    this.user = resp;
  
    return this.user;
  });
  }

 /**
   * delete user data 
   * @param user
   * @function userDelete
   */
 deleteAccount(user: any): void {
 this.fetchApiData.userDelete().subscribe((result) => {
  

  this.ngOnInit();
  
})
this.router.navigate(['welcome'])
 }
 /**
   * Open Update Account Dialog
   * @returns Account objcect
   */
  openUpdateAccountDialog(): void {
    this.dialog.open(ProfileEditComponent, {
      width: '300px',
    });
  }
  /**
   * route to movies page
   * @route movies
   */
  goBack(): void {
    this.router.navigate(['movies']);
  }

}
