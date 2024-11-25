import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Livro } from '../../Interface/Livro';


@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {

  
  linkApi1="http://localhost:8080/livros"
  linkApi2="http://localhost:8080/livros/mais-emprestados"
  constructor(private http: HttpClient) { }
  
  getAllLivros():Observable<Livro[]> {
   return this.http.get<Livro[]>(this.linkApi1)
  }

  getLivrosEmprestados():Observable<Livro[]> {
   return this.http.get<Livro[]>(this.linkApi2)
  }

  



}
