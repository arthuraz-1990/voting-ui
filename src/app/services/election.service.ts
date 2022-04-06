import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Election } from '../model';

@Injectable({
  providedIn: 'root'
})
export class ElectionService {

  private readonly PATH = environment.API_ADDRESS + '/election';

  constructor(
    private http: HttpClient
  ) { }

  getElections(): Observable<Election[]> {
    return this.http.get<Election[]>(this.PATH);
  }

  save(election: Election): Observable<Election> {
    return this.http.post<Election>(this.PATH, election);
  }
}
