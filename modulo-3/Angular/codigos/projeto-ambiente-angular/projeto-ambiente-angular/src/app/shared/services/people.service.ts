import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({ //informa para o Angular registrar o serviço people no nível raiz do aplicativo
  providedIn: 'root'
})
export class PeopleService {

  constructor() { }

  getPeople(): Observable<any> {
    let peopleArray = [
      {
        firstName: 'Renan',
        lastName: 'Toporoff',
        age: 30
      },
      {
        firstName: 'Leticia',
        lastName: 'Lima',
        age: 27
      },
      {
        firstName: 'Haru',
        lastName: 'Toporoff',
        age: 2
      },
      {
      firstName: 'Koda',
      lastName: 'Toporoff',
      age: 1
      }
    ]

    return of(peopleArray)
  }
}
