import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable } from 'rxjs';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  private itemsUrl = 'api/items';

  constructor(private http: HttpClient) {}

  getItems(): Observable<Item[]> {
    delay(4000);
    return this.http.get<Item[]>(this.itemsUrl);
  }
}
