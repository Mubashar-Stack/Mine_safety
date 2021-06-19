import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorHandlerService, HandleError } from '../../services/http-error-handler.service';
import { environment } from '../../../environments/environment';
import { Vehical } from '../models/vehical';


@Injectable({
  providedIn: 'root'
})
export class VehicalService {

  private apiUrl = `${environment.apiUrl}/vehicals`;
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
    this.handleError = this.httpErrorHandler.createHandleError('VehicalService')
  }

  getVehicals(): Observable<Vehical[]> {
    return this.http.get<Vehical[]>(`${this.apiUrl}`)
    .pipe(
      catchError(this.handleError('getVehicals', []))
    )
  }

  getVehical(id: number) {
    return this.http.get<Vehical>(`${this.apiUrl}/${id}`)
    .pipe(
      catchError(this.handleError('getVehical', null))
    )
  }

  addVehical(product: Vehical) {
    console.log(product);
    return this.http.post<Vehical>(`${this.apiUrl}/add`, product, this.httpOptions)
    .pipe(
      catchError(this.handleError('addVehical', null))
    )
  }

  updateVehical(product: Vehical) {
    return this.http.put<Vehical>(`${this.apiUrl}/update`, product, this.httpOptions)
    .pipe(
      catchError(this.handleError('updateVehical', null))
    )
  }

  deleteVehical(id: number) {
    return this.http.delete(`${this.apiUrl}/delete/${id}`)
    .pipe(
      catchError(this.handleError('deleteVehical', null))
    )
  }

}

