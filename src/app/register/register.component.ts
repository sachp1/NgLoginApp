import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  regForm: FormGroup;
  newEmp: Employee;
  hobbiesData:Array<any>;
  constructor(
    private formBuilder : FormBuilder,
    private empService : EmployeeService,
    private router: Router
  ) {
    this.regForm = this.formBuilder.group({
      username: ['',Validators.required],
      password: ['',Validators.required],
      email: '',
      firstname: '',
      lastname: '',
      gender: '',
      hobbies: this.formBuilder.array([]), // FOR ARRAY OF HOBBIES
    });
   }

  onChange(hob: string, isChecked:boolean){
    const emailFormArray = <FormArray>this.regForm.controls.hobbies;
    
  if(isChecked) {
    emailFormArray.push(new FormControl(hob));
  } else {
    let index = emailFormArray.controls.findIndex(x => x.value == hob)
    emailFormArray.removeAt(index);
  }
}  
  
   ngOnInit(): void {
    this.hobbiesData =[
      { id: 0, name: 'Swimming' },
      { id: 1, name: 'Music' },
      { id: 2, name: 'Football' },
      { id: 3, name: 'Dancing' }
    ];
  }
  onSubmit(){
  this.newEmp = this.regForm.value;
  this.empService.setEmployee(this.newEmp);
  this.router.navigate(['']);
  //  this.newEmp.username=f.username.value;
  //  this.newEmp.firstname=f.firstname.value;
  //  this.newEmp.password=f.password.value;
  //  this.newEmp.hobbies=f.hobbies.value;
  //   console.log(this.newEmp);
  }
}
