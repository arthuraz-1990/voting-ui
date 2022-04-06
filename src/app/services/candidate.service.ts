import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Candidate } from '../model';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  private readonly PATH = environment.API_ADDRESS + '/candidate';

  constructor(
    private http: HttpClient
  ) { }

  getCandidates(): Observable<Candidate[]> {
    return this.http.get<Candidate[]>(this.PATH);
  }

  save(candidate: Candidate): Observable<Candidate> {
    return this.http.post<Candidate>(this.PATH, candidate);
  }

  findById(id: string): Observable<Candidate> {
    return this.http.get<Candidate>(`${this.PATH}/${id}`);
  }
}
