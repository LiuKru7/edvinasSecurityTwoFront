import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";
import {CarPartsComponent} from "./pages/car-parts/car-parts.component";
import {SuppliersComponent} from "./pages/suppliers/suppliers.component";
import {AddSupplierComponent} from "./pages/add-supplier/add-supplier.component";

const routes: Routes = [
  {path: '', pathMatch: 'full',component: LoginComponent},
  {path: 'carparts', component: CarPartsComponent},
  {path: 'suppliers', component: SuppliersComponent},
  {path: 'add-supplier', component: AddSupplierComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
