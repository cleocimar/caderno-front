import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario';
import { catchError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url = 'http://localhost:8000/api/caderno/usuario/';   // A mesma chamada do INSOMNIA

  constructor(private http: HttpClient) {
  }
  getAll() : Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.url).pipe(
      catchError(error => of([]))
    );
  }
}
    