import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { ServicsService } from '../servics.service';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss']
})
export class EditEmployeeComponent implements OnInit {
  EmployeeData:any;
  EmpID:number;
  LocList = ['Trivandrum', 'Chennai', 'Bangalore', 'Kochi'];
  constructor(private route:ActivatedRoute,public dmService:ServicsService,private router:Router) { }

  ngOnInit(): void {

    this.EmpID = Number(this.route.snapshot.paramMap.get('empID'));
    this.EmployeeData = this.dmService.getAllEmployees().find(x=> x.id == this.EmpID );
   console.log(this.EmployeeData)
  }

  updateEmployee(EmpDetails)
  {   
    this.dmService.editEmployee(EmpDetails);
    this.router.navigate(['']);
  }


  Cancel(){
    this.router.navigate(['']);
  }

}
