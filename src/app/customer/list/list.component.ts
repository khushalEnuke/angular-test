import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import { Customer } from 'src/app/shared/models';
import { takeWhile } from 'rxjs/operators';
import * as moment from 'moment';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  
  customers: Customer[] = [];
  alive: boolean;

  constructor(private dataService: DataService) {
    this.alive = true;
   }

  ngOnInit() {
    this.getCustomers();
  }

  ngOnDestroy() {
    this.alive = false;
  }

  getCustomers() {
    this.dataService
      .getAllUsersAsObservable()
      .pipe(takeWhile(() => this.alive))
      .subscribe(customers => {
        this.customers = customers && customers.length ? customers : [];
        console.log('customers', this.customers)
      }) 
  }

  getAge(customerDate) {
    return moment(customerDate).diff(moment(), 'years')
  }

}
