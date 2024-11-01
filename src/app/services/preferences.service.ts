import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PreferencesService {
  private readonly PREFERENCES_KEY = 'user_preferences';

  constructor() {}

  // Salvează preferințele în local storage
  savePreferences(preferences: { city: string; maxPrice: number }) {
    localStorage.setItem(this.PREFERENCES_KEY, JSON.stringify(preferences));
  }

  // Preia preferințele din local storage
  getPreferences() {
    const preferences = localStorage.getItem(this.PREFERENCES_KEY);
    return preferences ? JSON.parse(preferences) : null;
  }
}
