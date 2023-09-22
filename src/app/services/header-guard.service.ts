import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HeaderGuardService {
  private displayHeader = true;

  shouldDisplayHeader(): boolean {
    return this.displayHeader;
  }

  hideHeader() {
    this.displayHeader = false;
  }

  showHeader() {
    this.displayHeader = true;
  }
}
