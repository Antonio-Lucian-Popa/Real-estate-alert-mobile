import { Component, OnInit } from '@angular/core';
import { ListingService } from '../services/listing.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  latestListings: any[] = []; // Stochează ultimele apartamente găsite
  weeklyListingCount = 0; // Numărul de apartamente găsite săptămâna aceasta

  constructor(private listingService: ListingService) {}

  ngOnInit() {
    this.loadLatestListings();
    this.loadWeeklyStats();
  }

  // Preia ultimele apartamente găsite
  loadLatestListings() {
    this.listingService.getLatestListings().subscribe(
      (listings) => {
        this.latestListings = listings;
      },
      (error) => {
        console.error('Eroare la încărcarea anunțurilor:', error);
      }
    );
  }

  // Preia statistici recente (ex. numărul de anunțuri săptămânale)
  loadWeeklyStats() {
    this.listingService.getWeeklyListingCount().subscribe(
      (count) => {
        this.weeklyListingCount = count;
      },
      (error) => {
        console.error('Eroare la încărcarea statisticilor:', error);
      }
    );
  }

  // Începe o căutare rapidă
  startQuickSearch() {
    this.listingService.startSearch().subscribe(
      () => {
        console.log('Căutarea a început.');
        // Poți adăuga logică suplimentară aici, de ex., redirecționare către pagina de anunțuri
      },
      (error) => {
        console.error('Eroare la pornirea căutării rapide:', error);
      }
    );
  }

}
