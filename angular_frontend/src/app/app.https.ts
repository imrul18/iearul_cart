import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'http://localhost:8000';

  constructor(private http: HttpClient) {}

  get(url: string) {
    return this.http.get(`${this.baseUrl}/${url}`).subscribe((data) => data);
  }

  post(url: string, data: any) {
    return this.http
      .post(`${this.baseUrl}/${url}`, data)
      .subscribe((data) => data);
  }

  put(url: string, data: any) {
    return this.http
      .put(`${this.baseUrl}/${url}`, data)
      .subscribe((data) => data);
  }

  delete(url: string) {
    return this.http.delete(`${this.baseUrl}/${url}`).subscribe((data) => data);
  }
}
