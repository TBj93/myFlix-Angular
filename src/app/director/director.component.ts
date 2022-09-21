// src/app/user-registration-form/user-registration-form.component.ts
import { Component, OnInit, Inject } from '@angular/core';

// You'll use this import to close the dialog on success

import { MAT_DIALOG_DATA} from '@angular/material/dialog';


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


