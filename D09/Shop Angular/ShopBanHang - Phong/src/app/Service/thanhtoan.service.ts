import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThanhtoanService {
  public tongtien=0;
  constructor() {}
  getSum(){
    return this.tongtien;
  }
}
