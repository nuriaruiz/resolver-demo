import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {

    createDb() {
    const items: Item[] = [
      { first: 'Mark', last: 'Otto', handle: '@mdo' },
      { first: 'Jacob', last: 'Thornton', handle: '@fat' },
      { first: 'Larry', last: 'the Bird', handle: '@twitter' },
      { first: 'John', last: 'Doe', handle: '@johndoe' },
      { first: 'Jane', last: 'Doe', handle: '@janedoe' },
      { first: 'Bob', last: 'Smith', handle: '@bobsmith' },
      { first: 'Alice', last: 'Johnson', handle: '@alicejohnson' },
      { first: 'Charlie', last: 'Brown', handle: '@charliebrown' },
      { first: 'David', last: 'Davis', handle: '@daviddavis' },
      { first: 'Emily', last: 'Wilson', handle: '@emilywilson' },
      { first: 'Frank', last: 'Jones', handle: '@frankjones' },
      { first: 'Grace', last: 'Miller', handle: '@gracemiller' },
      { first: 'Henry', last: 'Taylor', handle: '@henrytaylor' },
      { first: 'Isabel', last: 'Anderson', handle: '@isabelanderson' },
      { first: 'Jack', last: 'Thomas', handle: '@jackthomas' },
      { first: 'Karen', last: 'Moore', handle: '@karenmoore' },
      { first: 'Luke', last: 'Jackson', handle: '@lukejackson' },
      { first: 'Megan', last: 'White', handle: '@meganwhite' },
      { first: 'Nathan', last: 'Harris', handle: '@nathanharris' },
      { first: 'Olivia', last: 'Clark', handle: '@oliviaclark' }
    ];
    return { items };
  }
}
