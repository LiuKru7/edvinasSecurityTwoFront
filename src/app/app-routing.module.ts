import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";
import {CarPartsComponent} from "./pages/car-parts/car-parts.component";
import {SuppliersComponent} from "./pages/suppliers/suppliers.component";
import {AddSupplierComponent} from "./pages/add-supplier/add-supplier.component";
import {AddCarPartComponent} from "./pages/add-car-part/add-car-part.component";

const routes: Routes = [
  {path: '', pathMatch: 'full',component: LoginComponent},
  {path: 'carparts', component: CarPartsComponent},
  {path: 'suppliers', component: SuppliersComponent},
  {path: 'add-supplier', component: AddSupplierComponent},
  {path: 'add-part', component: AddCarPartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
