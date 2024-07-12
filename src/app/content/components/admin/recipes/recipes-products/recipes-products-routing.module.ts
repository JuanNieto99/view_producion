import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesProductsComponent } from './recipes-products.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: RecipesProductsComponent },
    { path: ':id/recipes-products', component: RecipesProductsComponent }
])],
  exports: [RouterModule]
})
export class RecipesProductsRoutingModule { }
