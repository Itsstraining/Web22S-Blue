import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class CalculaService {
  public sumElement !:any;
  public payment = 0;
  constructor(public data: DataService) { }
}
