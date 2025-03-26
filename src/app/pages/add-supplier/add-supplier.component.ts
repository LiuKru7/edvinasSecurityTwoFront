import { Component } from '@angular/core';
import {Supplier} from "../model/supplier";
import {CarPartsService} from "../../car-parts.service";

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

  constructor(private service: CarPartsService) {
  }


  addSupplier() {


  }
}
