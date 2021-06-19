import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorHandlerService, HandleError } from '../../services/http-error-handler.service';
import { environment } from '../../../environments/environment';
import { Assets } from '../models/assets';


@Injectable({
  providedIn: 'root'
})
export class AssetsService {

  private apiUrl = `${environment.apiUrl}/Assets`;
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
    this.handleError = this.httpErrorHandler.createHandleError('AssetsService')
  }

  getAssets(): Observable<Assets[]> {
    return this.http.get<Assets[]>(`${this.apiUrl}`)
    .pipe(
      catchError(this.handleError('getAssets', []))
    )
  }

  getAsset(id: number) {
    return this.http.get<Assets>(`${this.apiUrl}/${id}`)
    .pipe(
      catchError(this.handleError('getAssets', null))
    )
  }

  addAssets(product: Assets) {
    return this.http.post<Assets>(`${this.apiUrl}/add`, product, this.httpOptions)
    .pipe(
      catchError(this.handleError('addAssets', null))
    )
  }

  updateAssets(product: Assets) {
    return this.http.put<Assets>(`${this.apiUrl}/update`, product, this.httpOptions)
    .pipe(
      catchError(this.handleError('updateAssets', null))
    )
  }

  deleteAssets(id: number) {
    return this.http.delete(`${this.apiUrl}/delete/${id}`)
    .pipe(
      catchError(this.handleError('deleteAssets', null))
    )
  }

}

