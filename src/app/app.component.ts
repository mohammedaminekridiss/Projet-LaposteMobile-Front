import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { HeaderGuardService } from './services/header-guard.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(
    private router: Router,
    public headerGuardService: HeaderGuardService
  ) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const currentRoute = this.router.url;
        if (currentRoute === '/coordonnees' || currentRoute === '/livraison') {
          this.headerGuardService.hideHeader(); // Masquer le header sur les pages "coordonnees" et "livraison"
        } else {
          this.headerGuardService.showHeader(); // Afficher le header sur les autres pages
        }
      }
    });
  }
}