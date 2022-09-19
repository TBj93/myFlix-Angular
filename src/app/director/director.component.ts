// src/app/user-registration-form/user-registration-form.component.ts
import { Component, OnInit, Input, Inject } from '@angular/core';

// You'll use this import to close the dialog on success
import { MatDialogRef } from '@angular/material/dialog';
import { MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

// This import brings in the API calls we created in 6.2
import { FetchApiDataService } from '../fetch-api-data.service';

// This import is used to display notifications back to the user
import { MatSnackBar } from '@angular/material/snack-bar';
import { MovieCardComponent } from '../movie-card/movie-card.component';
@Component({
  selector: 'app-director',
  templateUrl: './director.component.html',
  styleUrls: ['./director.component.scss']
})
export class DirectorComponent implements OnInit {

 

  constructor(
   
    @Inject(MAT_DIALOG_DATA) 
    public data: {
      name: string,
      birth: Date,
      bio: string

    }
    
    ) { }
  
  // This is the function that will open the dialog when the signup button is clicked  

  ngOnInit(): void {
  }

  
  }


