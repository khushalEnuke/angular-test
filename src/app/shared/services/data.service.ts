import { Injectable } from '@angular/core';
import { Customer, Gender } from '../models/index';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  users: Customer[] = [
    {
      "customerId": 1,
      "name": "First User",
      "gender": Gender.male,
      "age": new Date(),
      "address": [
        {
          "street": "test 1",
          "postCode": "1222211",
          "houseNumber": 10
        },
        {
          "street": "test 2",
          "postCode": "423313",
          "houseNumber": 20
        }
      ],
      "orders": [
        {
          "orderId": "212",
          "orderDate": new Date(),
          "amount": 20000
        }
      ]
    },
    {
      "customerId": 2,
      "name": "First User",
      "gender": Gender.male,
      "age": new Date(),
      "address": [
        {
          "street": "test 1",
          "postCode": "1222211",
          "houseNumber": 10
        },
        {
          "street": "test 2",
          "postCode": "423313",
          "houseNumber": 20
        }
      ],
      "orders": []
    },
    {
      "customerId": 3,
      "name": "First User",
      "gender": Gender.male,
      "age": new Date(),
      "address": [
        {
          "street": "test 1",
          "postCode": "1222211",
          "houseNumber": 10
        },
        {
          "street": "test 2",
          "postCode": "423313",
          "houseNumber": 20
        }
      ],
      "orders": []
    }
  ]
  usersSubject: Subject<Customer[]>;

  constructor(private httpClient: HttpClient) {
    this.usersSubject = new BehaviorSubject<Customer[]>([]);
    this.usersSubject.next(this.users);
  }

  // getAllUsersFromAPI(): Observable<Customer[]> {
  //   return this.httpClient.get('/assets/data.json') as Observable<Customer[]>;
  // }

  getAllUsers(): Customer[] {
    return [...this.users];
  }

  getAllUsersAsObservable(): Observable<Customer[]> {
    return this.usersSubject.asObservable();
  }

  getUserDetail(id) : Customer {
    let index = -1;
    for (let i = 0; i < this.users.length; i++) {
      const user = this.users[i];
      if(user.customerId == id) {
        index = i;
        break;
      }
    }
    return index != -1 ? this.users[index] : null
  }

  // setAllUsers(users: Customer[]) {
  //   this.users = [...users];
  //   this.usersSubject.next([...users]);
  // }
}
