


// src/app/user-registration-form/user-registration-form.component.ts
import { Component, OnInit, Inject } from '@angular/core';

// You'll use this import to close the dialog on success

import { MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.scss']
})
export class GenreComponent implements OnInit {

 

  constructor(
   
    @Inject(MAT_DIALOG_DATA) 
    public data: {
      name: string,
      description: string

    }
    
    ) { }
  
  // This is the function that will open the dialog when the signup button is clicked  

  ngOnInit(): void {
  }

  
  }


