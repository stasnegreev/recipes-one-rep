import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  private darkThemeSubject = new BehaviorSubject<boolean>(true);

  darkTheme$: Observable<boolean> = this.darkThemeSubject.asObservable();

  toggleDarkTheme() {
    this.darkThemeSubject.next(!this.darkThemeSubject.getValue());
  }
}
