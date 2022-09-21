import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FetchApiDataService } from '../fetch-api-data.service'
import { MatDialog} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {

  @Input() userData: any = {};

  user: any = {};
 
  constructor(public fetchApiData: FetchApiDataService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar,
    private router: Router) { }

    ngOnInit(): void {
      this.getUserData();
      console.log(this.userData);
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


 editAccount(): void {
 
  this.fetchApiData.userEdit(this.userData).subscribe((result) => {
    console.log( 'test:', this.userData );
    this.snackBar.open(result, 'OK', {
      duration: 2000
   });

   
 })

 this.snackBar.open( this.user.Username, '´s Account succesfully updated', {
  duration: 2000
});

  }

  goBack(): void {
    this.router.navigate(['movies']);
  }

}
