import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
//import { ConsoleReporter } from 'jasmine';
import { CustomerModel } from './customermodel';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  [x: string]: any;
  formValue!:FormGroup;
  customermodelobj:CustomerModel=new CustomerModel();

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.formValue=this.fb.group({
      cid:[''],
      firstname:[''],
      lastname:[''],
      phoneno:[''],
      address:[''],
      loanamount:['']
    })
  }
  postCustomer(){
    this.customermodelobj.cid=this.formValue.value.cid;
    this.customermodelobj.firstname=this.formValue.value.firstname;
    this.customermodelobj.lastname=this.formValue.value.lastname;
    this.customermodelobj.phoneno=this.formValue.value.phoneno;
    this.customermodelobj.address=this.formValue.value.address;
    this.customermodelobj.loanamount=this.formValue.value.loanamount;
    this['api'].postEmployee(this.customermodelobj)
    .subscribe((res: any)=>{
      console.log(res);
      this.formValue.reset();
    },(_err: any)=>{
      console.log("Some thing Went Wrong")
    }) 
  }

}
