
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorHandlerService, HandleError } from '../../services/http-error-handler.service';
import { environment } from '../../../environments/environment';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private apiUrl = `${environment.apiUrl}/employees`;
  private handleError: HandleError;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  redirectUrl: string;

  constructor(
    private http: HttpClient,
    private httpErrorHandler: HttpErrorHandlerService
  ) {
    this.handleError = this.httpErrorHandler.createHandleError('EmployeeService')
  }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.apiUrl}`)
    .pipe(
      catchError(this.handleError('getEmployees', []))
    )
  }

  getEmployee(id: number) {
    return this.http.get<Employee>(`${this.apiUrl}/${id}`)
    .pipe(
      catchError(this.handleError('getEmployee', null))
    )
  }

  addEmployee(product: Employee) {
    return this.http.post<Employee>(`${this.apiUrl}/add`, product, this.httpOptions)
    .pipe(
      catchError(this.handleError('addEmployee', null))
    )
  }

  updateEmployee(product: Employee) {
    return this.http.put<Employee>(`${this.apiUrl}/update`, product, this.httpOptions)
    .pipe(
      catchError(this.handleError('updateEmployee', null))
    )
  }

  deleteEmployee(id: number) {
    return this.http.delete(`${this.apiUrl}/delete/${id}`)
    .pipe(
      catchError(this.handleError('deleteEmployee', null))
    )
  }

}

