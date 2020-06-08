import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/shared/models';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/shared/services/data.service';
import * as moment from 'moment';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(private route : ActivatedRoute, private dataService: DataService) { }

  customer:Customer;
  customerId;

  ngOnInit() {
    this.customerId = this.route.snapshot.paramMap.get('id');
    this.getCustomerDetail();
  }

  getCustomerDetail() {
    this.customer = this.dataService.getUserDetail(this.customerId)
  }

  getAge(customerDate) {
    return moment(customerDate).diff(moment(), 'years')
  }

}
