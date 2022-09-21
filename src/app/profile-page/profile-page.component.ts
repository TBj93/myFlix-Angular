import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FetchApiDataService } from '../fetch-api-data.service'
import { MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {

 
  constructor(public fetchApiData: FetchApiDataService,
    public dialog: MatDialog,
    private router: Router) { }

  ngOnInit(): void {
  }
  goBack(): void {
    this.router.navigate(['movies']);
  }

}
