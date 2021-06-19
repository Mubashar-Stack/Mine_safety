import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorHandlerService, HandleError } from '../../services/http-error-handler.service';
import { environment } from '../../../environments/environment';
import { activeDevice } from '../models/active-devices';

@Injectable({
  providedIn: 'root'
})
export class ActivedevicesService {

  private apiUrl = `${environment.apiUrl}/active-device`;
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
    this.handleError = this.httpErrorHandler.createHandleError('activeDeviceService')
  }

  getactiveDevices(): Observable<activeDevice[]> {
    return this.http.get<activeDevice[]>(`${this.apiUrl}`)
    .pipe(
      catchError(this.handleError('getactiveDevices', []))
    )
  }
}
