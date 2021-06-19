
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorHandlerService, HandleError } from '../../services/http-error-handler.service';
import { environment } from '../../../environments/environment';
import { accessPoint } from '../models/access-point';

@Injectable({
  providedIn: 'root'
})
export class accessPointService {

  private apiUrl = `${environment.apiUrl}/access-point`;
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
    this.handleError = this.httpErrorHandler.createHandleError('accessPointService')
  }

  getaccessPoints(): Observable<accessPoint[]> {
    return this.http.get<accessPoint[]>(`${this.apiUrl}`)
    .pipe(
      catchError(this.handleError('getaccessPoints', []))
    )
  }

  getaccessPoint(id: number) {
    return this.http.get<accessPoint>(`${this.apiUrl}/${id}`)
    .pipe(
      catchError(this.handleError('getaccessPoint', null))
    )
  }

  addaccessPoint(add_access_point: accessPoint) {
    return this.http.post<accessPoint>(`${this.apiUrl}/add`, add_access_point, this.httpOptions)
    .pipe(
      catchError(this.handleError('addaccessPoint', null))
    )
  }

  updateaccessPoint(update_access_Point: accessPoint) {
    return this.http.put<accessPoint>(`${this.apiUrl}/update`, update_access_Point, this.httpOptions)
    .pipe(
      catchError(this.handleError('updateaccessPoint', null))
    )
  }

  deleteaccessPoint(id: number) {
    return this.http.delete(`${this.apiUrl}/delete/${id}`)
    .pipe(
      catchError(this.handleError('deleteaccessPoint', null))
    )
  }

}

