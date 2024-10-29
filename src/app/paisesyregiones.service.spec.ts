/**import { TestBed } from '@angular/core/testing';

import { PaisesyregionesService } from './paisesyregiones.service';

describe('PaisesyregionesService', () => {
  let service: PaisesyregionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaisesyregionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});**/
/*importamos los datos*/
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
/*declaramos las variables  para la ejecucion del servicio  web*/
@Injectable({
  providedIn: 'root'
})
export class PaisesyregionesService{
  private apiUrl = 'https://countries.trevorblades.com/'
  constructor(private http: HttpClient){}
  obtenerContienetesypaises(): Observable<any>{
    return this.http.get<any>(this.apiUrl)  }
}
