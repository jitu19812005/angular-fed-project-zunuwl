import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let employees = [
      {
        id: 1,
        name: 'Jitendra',
        location: 'Noida',
        email: 'jitu@gmail.com',
        mobile: '123121',
      },
      {
        id: 2,
        name: 'Akas',
        location: 'Luckno',
        email: 'Akas@mail.com',
        mobile: '43534353453',
      },
      {
        id: 3,
        name: 'Usha',
        location: 'UP',
        email: 'Usha@mail.com',
        mobile: '4535456445',
      },
    ];
    return { employees };
  }
}
