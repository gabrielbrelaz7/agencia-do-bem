import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable, of } from 'rxjs';
import { User } from '../models/user.model';
// import { ResponseAcesso, ResponseAcessoCOD } from '../users/user.model';
// import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
// import { Turma } from './turma.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User | undefined;

  constructor(
    private http:HttpClient    
    ) { 

    }

  getByID(id: number): Observable<User>{      
    if(this.user != null && this.user.id === id){
      return of(this.user);
    }
    // this.user =;

    return this.http
    .get<User>(`${environment.enderecos.apiCriandoHistorias}livros/codigo/${codigo}`)
    .pipe(
      map(
        (response) => {
          this.user = new User();
          this.user.map(response);

          return this.user;
        }
      )
    )    
  }


  // URLS com END POITS para consumo de dados da API REST  

  private urlLivros = "http://api-criandohistorias.dev.marlin.net/public/api/livros";
  private urlAlunos = "http://api-criandohistorias.dev.marlin.net/public/api/alunos";


// // Método para listagem de livros
// getUsers():Observable<ResponseAcesso> {
//   return this.http.get<ResponseAcesso>(this.urlLivros);
// }

//  // Método para listagem de único livro por código do aluno 
//  getUser(cod:string):Observable<ResponseAcessoCOD> {
//   const urlLivroID = `${this.urlAlunos}/${cod}`
//   return this.http.get<ResponseAcessoCOD>(urlLivroID);
// }

// Método para listagem de livros por código do Aluno 
  getLivros(cod:string):Observable<User[]> {
    const urlLivroID = `${this.urlAlunos}/${cod}/livros`
    return this.http.get<User[]>(urlLivroID);
  }

// Método para listagem de livros por ID

getLivro(id:string):Observable<User> {
  const urlLivroID = `${this.urlLivros}/${id}`
  return this.http.get<User>(urlLivroID);
}



}
