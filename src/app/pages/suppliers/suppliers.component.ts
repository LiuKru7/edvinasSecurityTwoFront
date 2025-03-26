import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {CarPartsService} from "../../car-parts.service";
import {Supplier} from "../model/supplier";

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.css']
})
export class SuppliersComponent implements OnInit {

  suppliers: Supplier[] = [];

  constructor(private service:CarPartsService) {}

  ngOnInit() {
    this.loadSuppliers();
  }

  private loadSuppliers() {
    this.service.getAllSuppliers().subscribe({
      next:data => {
        this.suppliers = data;
      }
    })
  }
}
