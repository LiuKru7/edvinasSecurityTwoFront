import {Component, OnInit} from '@angular/core';
import {CarParts} from "../model/car-parts";
import {Router} from "@angular/router";
import {CarPartsService} from "../../car-parts.service";

@Component({
  selector: 'app-car-parts',
  templateUrl: './car-parts.component.html',
  styleUrls: ['./car-parts.component.css']
})
export class CarPartsComponent implements OnInit {

  carparts:CarParts[] = []
  errorMessage: string = "";

  constructor(private service:CarPartsService) {}

  ngOnInit() {
    this.loadCarParts();
  }

  loadCarParts() {
    this.service.getAllCarParts().subscribe({
      next: data => {
        this.carparts = data;
      }
    })
  }
}
