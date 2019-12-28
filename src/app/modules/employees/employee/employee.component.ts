import { Component, OnInit } from '@angular/core';

import { EmployeeService } from '../../shared/employee.service';
import { Employee } from 'src/app/model/employee.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private es: EmployeeService) { }

  ngOnInit() {
  }

  createAndupdate(currentEmployee: Employee){
  	console.log(currentEmployee);
  	if(currentEmployee.id != null){
  		this.updateEmployee(currentEmployee);
  	}else {
  		this.createEmployee(currentEmployee);
  	}
  }

  createEmployee(emp: Employee ){
  	this.es.createEmployee(emp).subscribe(
  		()=> {
  			alert("Employee Created Successfully");
  		});
  }

  updateEmployee(emp: Employee){
  	this.es.updateEmployee(emp).subscribe();
  }

  clear(){
  	this.es.currentEmployee = {
			id: null,
			firstName: '',
			lastName: '',
			designation: '',
			contactNumber: null,
			address: ''
	}
  }

}
