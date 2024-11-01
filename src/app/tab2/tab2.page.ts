import { Component, OnInit } from '@angular/core';
import { ListingService } from '../services/listing.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  listings: any[] = []; // Toate anunțurile
  filteredListings: any[] = []; // Anunțurile filtrate și sortate
  maxPrice: number = 0; // Filtru pentru preț maxim
  sortOption: string = 'recent'; // Opțiunea de sortare selectată

  constructor(private listingService: ListingService) {}

  ngOnInit() {
    this.loadListings();
  }

  // Preia lista de anunțuri
  loadListings() {
    this.listingService.getAllListings().subscribe(
      (listings) => {
        this.listings = listings;
        this.applyFilters();
      },
      (error) => {
        console.error('Eroare la încărcarea anunțurilor:', error);
      }
    );
  }

  // Filtrare după preț maxim
  filterListings() {
    this.applyFilters();
  }

  // Sortare anunțuri
  sortListings() {
    this.applyFilters();
  }

  // Aplica filtrele și sortarea
  applyFilters() {
    // Aplică filtrul după preț
    this.filteredListings = this.listings.filter((listing) => {
      return this.maxPrice ? listing.price <= this.maxPrice : true;
    });

    // Aplică sortarea
    if (this.sortOption === 'recent') {
      this.filteredListings.sort((a, b) => new Date(b.date_posted).getTime() - new Date(a.date_posted).getTime());
    } else if (this.sortOption === 'priceAsc') {
      this.filteredListings.sort((a, b) => a.price - b.price);
    } else if (this.sortOption === 'priceDesc') {
      this.filteredListings.sort((a, b) => b.price - a.price);
    }
  }

  // Funcția pentru vizualizarea detaliilor unui anunț
  viewListingDetails(listing: any) {
    // Poți naviga către o pagină de detalii sau afișa un dialog
    console.log("Detalii anunț:", listing);
  }
}
