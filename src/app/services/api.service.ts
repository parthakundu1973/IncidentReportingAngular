import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from '../models/api.response';
import { Incident } from '../models/incident';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseurl: string = "http://localhost:50293/api/incidents/";
  constructor(private http: HttpClient) { }

  getIncidents(): Observable<Incident[]> {
    return this.http.get<Incident[]>(this.baseurl);
  }

  getIncident(id: number): Observable<Incident> {
    return this.http.get<Incident>(this.baseurl + id);
  }

  createIncident(incident: Incident): Observable<Incident> {
    return this.http.post<Incident>(this.baseurl, incident);
  }

  updateIncident(id: number, incident: Incident):Observable<ApiResponse> {
    return this.http.put<ApiResponse>(this.baseurl + id, incident);

  }

  deleteIncident(id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(this.baseurl + id);
  }
}
