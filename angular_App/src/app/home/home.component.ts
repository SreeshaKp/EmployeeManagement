import { Component, OnInit } from '@angular/core';

import { ServicsService } from '../servics.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  inputVal:string = '';
  public employee = [];

  constructor(public dmService:ServicsService, private router:Router) { }

  ngOnInit(): void {

    this.employee = this.dmService.getAllEmployees();
  }


  editEmpDetails(empID)
  {
    this.router.navigate(['app-edit-employee/' +empID]);  
  }

  // deleteEmpDetails(emp){
  //   this.dmService.deleteEmployee(emp);
 
// }

}
