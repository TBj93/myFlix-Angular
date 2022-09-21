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

    ngOnInit(): void {
      this.getUserData();

    }

  getUserData(): void{
  this.fetchApiData.getUser().subscribe((resp: any) => {
    this.user = resp;
  
    return this.user;
  });
  }

 
 deleteAccount(user: any): void {
 this.fetchApiData.userDelete().subscribe((result) => {
  

  this.ngOnInit();
  
})
this.router.navigate(['welcome'])
 }


 


  openUpdateAccountDialog(): void {
    this.dialog.open(ProfileEditComponent, {
      width: '300px',
    });
  }


  goBack(): void {
    this.router.navigate(['movies']);
  }

}
