import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorHandlerService, HandleError } from '../../services/http-error-handler.service';
import { environment } from '../../../environments/environment';
import { deviceAssociation } from '../models/device-association';


@Injectable({
  providedIn: 'root'
})
export class DeviceAssociationService {

  private apiUrl = `${environment.apiUrl}/deviceAssociation`;
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
    this.handleError = this.httpErrorHandler.createHandleError('DeviceAssociationService')
  }

  getdeviceAssociations(): Observable<deviceAssociation[]> {
    return this.http.get<deviceAssociation[]>(`${this.apiUrl}`)
    .pipe(
      catchError(this.handleError('getdeviceAssociations', []))
    )
  }

  getdeviceAssociation(id: number) {
    return this.http.get<deviceAssociation>(`${this.apiUrl}/${id}`)
    .pipe(
      catchError(this.handleError('getdeviceAssociation', null))
    )
  }

  getempdeviceAssociation(id: number) {
    return this.http.get<deviceAssociation>(`${this.apiUrl}/emp/${id}`)
    .pipe(
      catchError(this.handleError('getempdeviceAssociation', null))
    )
  }

  adddeviceAssociation(deviceAssociationAdd: deviceAssociation) {
    console.log(deviceAssociationAdd);
    return this.http.post<deviceAssociation>(`${this.apiUrl}/add`, deviceAssociationAdd, this.httpOptions)
    .pipe(
      catchError(this.handleError('adddeviceAssociation', null))
    )
  }

  updatedeviceAssociation(deviceAssociationUpdate: deviceAssociation) {
    return this.http.put<deviceAssociation>(`${this.apiUrl}/update`, deviceAssociationUpdate, this.httpOptions)
    .pipe(
      catchError(this.handleError('updatedeviceAssociation', null))
    )
  }

  deletedeviceAssociation(id: number) {
    return this.http.delete(`${this.apiUrl}/delete/${id}`)
    .pipe(
      catchError(this.handleError('deletedeviceAssociation', null))
    )
  }

}

