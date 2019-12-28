import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../../../app/model/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

	URl = "http://localhost:3000/Employee";

	currentEmployee : Employee = {
			id: null,
			firstName: '',
			lastName: '',
			designation: '',
			contactNumber: null,
			address: ''
	}

  constructor(
  		private http: HttpClient
  	) { }

  

  getAllEmployees():Observable<Employee[]>{
  	return this.http.get<Employee[]>(this.URl);
  }

  deleteEmployee(id:number):Observable<Employee>{
  	return this.http.delete<Employee>(this.URl + "/" +id);
  }

  createEmployee(emp:Employee): Observable<Employee>{
  	return this.http.post<Employee>(this.URl, emp);
  }

  updateEmployee(emp: Employee){
  	return this.http.put(this.URl + "/" +emp.id , emp);
  }


}
