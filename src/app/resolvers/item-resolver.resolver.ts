import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, delay } from 'rxjs/operators';

import { Item } from '../models/item';
import { InMemoryDataService } from '../services/inMemoryDataService';

@Injectable({
  providedIn: 'root',
})
export class ItemResolver implements Resolve<Item[]> {
  constructor(private dataService: InMemoryDataService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.getData().pipe(
      delay(4000),
      map(data => {
        return JSON.parse(JSON.stringify(data));
      })
    );
  }

  getData(): Observable<any> {
    const data = this.dataService.createDb();
    
    return of(data).pipe(
      map((data: { items: Item[] }) => data.items)    
    );
  }
}
