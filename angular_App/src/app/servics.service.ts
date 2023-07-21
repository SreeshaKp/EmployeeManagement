import { Injectable } from '@angular/core';

@Injectable()
export class ServicsService {

  constructor() { }

  public employees=[]

  public employee = [
    {"id": 1,
    "name": "Sreesha" ,
    "location": "Trivandrum",
    "mobile": 1234567890
    },
    {"id": 2,
    "name": "Sree" ,
    "location": "Kochi",
    "mobile": 2345678901
    }]


  getAllEmployees() {
      return  this.employee;
  }


  addEmployee(data) {
    this.employee.push(data)
  }
  editEmployee(EmpDetails) {
    this.employee = this.employee.filter((value,key)=>{
      if(value.id == EmpDetails.id){
        value.name = EmpDetails.name;
        value.location = EmpDetails.location;
        value.mobile = EmpDetails.mobile
      }
      return true;
    });
  }
  deleteEmployee(EmpDetails) {
    this.employee = this.employee.filter((value,key)=>{
      return value.id != EmpDetails.id;
    });
  }
}
