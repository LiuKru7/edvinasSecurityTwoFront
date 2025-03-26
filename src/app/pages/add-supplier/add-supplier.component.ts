import { Component } from '@angular/core';
import {Supplier} from "../model/supplier";
import {CarPartsService} from "../../car-parts.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-supplier',
  templateUrl: './add-supplier.component.html',
  styleUrls: ['./add-supplier.component.css']
})
export class AddSupplierComponent {
  supplier: Supplier = {
    email: "",
    id: NaN,
    address: ""
  }

  constructor(private service: CarPartsService, private router: Router) {
  }

  addSupplier() {
    this.service.addNewSupplier(this.supplier).subscribe({
      next: (result) => {
        this.router.navigate(['/suppliers'])
      }
    }
    )
  }
}
