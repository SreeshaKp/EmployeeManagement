import { Component, OnInit } from '@angular/core';
import { ServicsService } from '../servics.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {
  public id:string;
  public name:string;
  public location:string;
  public mobile:string;
  LocList = ['Trivandrum', 'Chennai', 'Bangalore', 'Kochi'];


  constructor(public dmService:ServicsService, private router:Router) { }

  ngOnInit(): void {
  }

  addEmployeeDetails()
  {   
    let EmpDetails = {
      "id":this.id,
      "name":this.name,
      "location":this.location,
      "mobile":this.mobile
    }
    
      this.dmService.addEmployee(EmpDetails);
    this.router.navigate(['']);
      
    
  }

  Cancel()
  {
    this.router.navigate(['']);
  }
}
