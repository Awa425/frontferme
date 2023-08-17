import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CapteurService {
  private apiUrl = 'http://127.0.0.1:8000/api/capteurs';

  constructor(private http: HttpClient) {}

  listCapteurs(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  detailCapteur(id: number): Observable<any> {
    return this.http.get<any>(this.apiUrl + '/' + id);
  }

  addCapteur(capteur: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, capteur);
  }

  updateCapteur(body: any, id: number): Observable<any> {
    return this.http.put<any>(this.apiUrl + '/' + id, body);
  }
}
