import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorHandlerService, HandleError } from '../../services/http-error-handler.service';
import { environment } from '../../../environments/environment';
import { accessPoint } from '../models/access-points';

@Injectable({
  providedIn: 'root'
})
export class NodemarkerService {

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

  


  
}
