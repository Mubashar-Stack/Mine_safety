
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorHandlerService, HandleError } from '../../services/http-error-handler.service';
import { environment } from '../../../environments/environment';
import { wifiTags } from '../models/wifi-tags';

@Injectable({
  providedIn: 'root'
})
export class wifitagsService {

  private apiUrl = `${environment.apiUrl}/wifi-tags`;
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
    this.handleError = this.httpErrorHandler.createHandleError('wifitagsService')
  }

  getwifiTagss(): Observable<wifiTags[]> {
    return this.http.get<wifiTags[]>(`${this.apiUrl}`)
    .pipe(
      catchError(this.handleError('getwifiTagss', []))
    )
  }

  getwifiTags(id: number) {
    return this.http.get<wifiTags>(`${this.apiUrl}/${id}`)
    .pipe(
      catchError(this.handleError('getwifiTags', null))
    )
  }

  addwifiTags(add_wifi_Tags: wifiTags) {
    return this.http.post<wifiTags>(`${this.apiUrl}/add`, add_wifi_Tags, this.httpOptions)
    .pipe(
      catchError(this.handleError('addwifiTags', null))
    )
  }

  updatewifiTags(update_wifi_Tags: wifiTags) {
    return this.http.put<wifiTags>(`${this.apiUrl}/update`, update_wifi_Tags, this.httpOptions)
    .pipe(
      catchError(this.handleError('updatewifiTags', null))
    )
  }

  deletewifiTags(id: number) {
    return this.http.delete(`${this.apiUrl}/delete/${id}`)
    .pipe(
      catchError(this.handleError('deletewifiTags', null))
    )
  }

}

