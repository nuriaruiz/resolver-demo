import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Item } from '../models/item';
import { ItemService } from '../services/ItemService';

@Component({
  selector: 'app-table-without-resolver',
  templateUrl: './table-without-resolver.component.html',
  styleUrls: ['./table-without-resolver.component.scss']
})
export class TableWithoutResolverComponent implements OnInit{
  items: Item[] = [];
  loading$ = new BehaviorSubject<boolean>(true);
  
  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.loading$.next(true);
    this.itemService.getItems().subscribe(items => {
      this.items = items;
      this.loading$.next(false); 
    });
  }
}
