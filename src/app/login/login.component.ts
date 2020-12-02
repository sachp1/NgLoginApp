import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from "../services/employee.service";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = {username:'',password: ''};
  form: FormGroup;
  constructor(
    private formBuilder : FormBuilder,
   private empService : EmployeeService,
   public router:Router,
  ) { 
    
}

  ngOnInit(): void {
    this.form=this.formBuilder.group({
      username:"",
      password:""
    });
  }
  onSubmit() {
    let f=this.form.controls;
    this.user.username=f.username.value;
    this.user.password=f.password.value;
    let emp= this.empService.getEmployees();
    let valid =false;
    emp.forEach(e=>{
      if(e.username == this.user.username && e.password == this.user.password){
        valid=true;
        localStorage.setItem('currentUser',JSON.stringify(e));
        this.router.navigate(['/menu']);
        
      }
    })
    console.log(f);
    console.log(valid)
  }
    
}
