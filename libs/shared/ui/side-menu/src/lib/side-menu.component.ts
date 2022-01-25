import {
  Component,
  ChangeDetectionStrategy,
  EventEmitter,
  Output, Input
} from '@angular/core';
import { Observable } from 'rxjs';
import { SettingsService } from '../../../../feature/settings/src/lib/settings.service';

@Component({
  selector: 'recipes-one-rep-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideMenuComponent {
  @Output() closeSideNav = new EventEmitter<void>();
  @Input() sideMenuItems = [{ url: 'recipes', label: 'Рецепты' }];
  darkTheme$: Observable<boolean> = this.settingService.darkTheme$;

  constructor(
    private settingService: SettingsService,
  ) {
  }

  itemClicked() {
    this.closeSideNav.emit();
  }

  toggleTheme() {
    this.settingService.toggleDarkTheme();
  }
}
