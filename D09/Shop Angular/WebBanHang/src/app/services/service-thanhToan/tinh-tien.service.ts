import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TinhTienService {
  public tongtien = 0;
  thanhToan() {
    return this.tongtien;
  }
  constructor() { }
}
