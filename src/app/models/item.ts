export interface Item {
  first: string;
  last: string;
  handle: string;
}

export interface ItemResolved{
  item: Item[];
  error?: any;
}