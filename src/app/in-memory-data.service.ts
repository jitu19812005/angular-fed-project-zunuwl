import { InMemoryDbService } from 'angular-in-memory-web-api'; 
import {Injectable} from '@angular/core';
import {Employee} from './employee';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb(){
    let employees=[
      {
        id: 1, 
        name: 'Ram', 
        location:'Banglore', 
        email: 'ram@gmail.com',
        mobile:'9867512345'   
      },
      {
        id: 2, 
        name: 'Raj',
        location:'Chennai', 
        email: 'raj@mail.com', 
        mobile: '7867534521'  
      },
      { 
        id: 3, 
        name: 'Vinay',
        location:'Pune', 
        email: 'vinay@mail.com', 
        mobile: '9975287450'  
      }

    ];
    return {employees};
  }
}
