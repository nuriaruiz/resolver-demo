import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemResolver } from './resolvers/item-resolver.resolver';
import { InMemoryDataService } from './services/inMemoryDataService';
import { TableResolverComponent } from './table-resolver/table-resolver.component';
import { TableWithoutResolverComponent } from './table-without-resolver/table-without-resolver.component';

const routes: Routes = [
  { path: 'with-resolver', component: TableResolverComponent, resolve: { items: ItemResolver } },
  { path: 'without-resolver', component: TableWithoutResolverComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [ItemResolver, InMemoryDataService],
})
export class AppRoutingModule { }
