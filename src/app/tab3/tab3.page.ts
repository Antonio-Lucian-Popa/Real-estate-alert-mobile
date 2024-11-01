import { Component, OnInit } from '@angular/core';
import { PreferencesService } from '../services/preferences.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  city: string = '';
  maxPrice: number = 0;
  preferencesSaved: boolean = false;

  constructor(private preferencesService: PreferencesService) {}

  ngOnInit() {
    this.loadPreferences();
  }

  // Încarcă preferințele salvate (dacă există)
  loadPreferences() {
    const preferences = this.preferencesService.getPreferences();
    if (preferences) {
      this.city = preferences.city;
      this.maxPrice = preferences.maxPrice;
    }
  }

  // Salvează preferințele utilizatorului
  savePreferences() {
    const preferences = {
      city: this.city,
      maxPrice: this.maxPrice
    };
    this.preferencesService.savePreferences(preferences);
    this.preferencesSaved = true;

    // Mesaj de confirmare temporar
    setTimeout(() => {
      this.preferencesSaved = false;
    }, 3000);
  }
}
