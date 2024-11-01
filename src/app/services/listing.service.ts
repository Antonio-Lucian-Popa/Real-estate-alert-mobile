import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListingService {
  private apiUrl = 'http://localhost:8000/api/listings'; // URL-ul backend-ului

  constructor(private http: HttpClient) {}

  // Obține ultimele apartamente găsite
  getLatestListings(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/latest`);
  }

  // Obține numărul de apartamente găsite săptămâna aceasta
  getWeeklyListingCount(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/weekly_count`);
  }

  // Pornește o căutare rapidă
  startSearch(): Observable<any> {
    return this.http.post(`${this.apiUrl}/start_search`, {});
  }
   // Obține toate anunțurile
   getAllListings(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}`);
  }
}
