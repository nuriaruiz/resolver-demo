import { Component } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'router-app-testing';
  items: any[] = [];
  loading$ = new BehaviorSubject<boolean>(false);
  
  navigateTo(route: string): void {
    console.log('Navigating to: ', route);
    this.router.navigate([route]);
  }

  constructor(private router: Router) {
    router.events.forEach((event) => {
      if(event instanceof NavigationStart) {
        console.log('NavigationStart');
        this.loading$.next(true);
      }
      if(event instanceof NavigationEnd) {
        console.log('NavigationEnd');
        this.loading$.next(false);
      }
    });
  }
}
