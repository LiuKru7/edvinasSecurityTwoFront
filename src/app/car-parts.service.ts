import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {CarParts} from "./pages/model/car-parts";
import {Supplier} from "./pages/model/supplier";
import {CarPartRequest} from "./pages/model/car-part-request";

@Injectable({
  providedIn: 'root'
})
export class CarPartsService {

  private carPartApiUrl:string = "http://localhost:8080/api/carparts/user"
  private supplierApiUrl: string = "http://localhost:8080/api/supplier/admin";
  private carPartApiUrlAdmin:string = "http://localhost:8080/api/carparts/admin"


  constructor(private http: HttpClient) { }


  getAllCarParts(): Observable<CarParts[]> {
    return this.http.get<CarParts[]>(`${this.carPartApiUrl}`, {
      headers: this.getAuthHeaders()
    });
  }

  getAllSuppliers(): Observable<Supplier[]> {
    return this.http.get<Supplier[]>(`${this.supplierApiUrl}`, {
      headers: this.getAuthHeaders()
    })
  }
  addNewSupplier(supplier: Supplier):Observable<Supplier> {
    return this.http.post<Supplier>(`${this.supplierApiUrl}`, supplier, {
      headers: this.getAuthHeaders()
    })
  }

  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  addPart(carPartRequest: CarPartRequest): Observable<any> {
    return this.http.post<any>(`${this.carPartApiUrlAdmin}`, carPartRequest, {
      headers: this.getAuthHeaders()
    })
  }
}
