import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Item } from '../models/item';


@Component({
  selector: 'app-table-resolver',
  templateUrl: './table-resolver.component.html',
  styleUrls: ['./table-resolver.component.scss'],
})
export class TableResolverComponent implements OnInit{
  items: Item[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.items = this.route.snapshot.data['items'];
  }
}
