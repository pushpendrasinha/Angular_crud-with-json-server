import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../shared/employee.service';
import { Employee } from 'src/app/model/employee.model';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

	allEmployee: Employee[];

  constructor(private es: EmployeeService) { }

  ngOnInit() {
  	this.getAllEmployee();
  }

  getAllEmployee(){
  	this.es.getAllEmployees().subscribe(
  		(data:Employee[]) => {
  			this.allEmployee = data;
  			console.log(this.allEmployee);
  		});
  }

  deleteEmployee(id:number){
  	console.log(id);
  	this.es.deleteEmployee(id).subscribe(
  		(data: Employee) => {
  			this.getAllEmployee();
  			alert("Data Deleted Successfully");
  		});

  }

  edit(emp){
  	this.es.currentEmployee =Object.assign({}, emp);
  }

}


