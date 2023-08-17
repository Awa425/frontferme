import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MaladieService {
  private apiUrl = 'http://127.0.0.1:8000/api/maladies';

  constructor(private http: HttpClient) {}

  listMaladies(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
  detailMaladie(id: number): Observable<any> {
    return this.http.get<any>(this.apiUrl + '/' + id);
  }

  addMaladie(maladie: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, maladie);
  }

  updateMaladie(body: any, id: number): Observable<any> {
    return this.http.put<any>(this.apiUrl + '/' + id, body);
  }
}
