import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviroment } from 'src/app/enviroment';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private BaseUrl = enviroment.BASE_URL

  constructor(private http: HttpClient) { }

  GetAllData(url: string, params?: any): Observable<any> {
    return this.http.get(this.BaseUrl + url, { params })
  }
}
