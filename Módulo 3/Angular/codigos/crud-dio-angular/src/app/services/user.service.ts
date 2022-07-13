import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = 'https://sheet.best/api/sheets/8fd9d4ff-1111-4790-a387-716fdc5bf9d9';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }

  constructor(private httpClient: HttpClient) { }

  //retorna a lista de usuários
  //C.R.U.D. - CREATE, READ, UPDATE, DELETE
  getUsers():Observable<User[]> {
    return this.httpClient.get<User[]>(this.apiUrl)
  }

  //Salva usuario no banco CREATE
  postUser(user: User):Observable<User>{
    return this.httpClient.post<User>(this.apiUrl, user, this.httpOptions)
  }

  //Exclui o usuário do banco DELETE
  deleteUser(id: number):Observable<User> {
    return this.httpClient.delete<User>(`${this.apiUrl}/id/${id}`)
  }
}
