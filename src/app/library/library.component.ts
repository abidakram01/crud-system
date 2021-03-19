import { Component, OnInit, Inject } from '@angular/core';
import { CrudService } from '../service/crud.service';
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {
  users: any;
  addForm: FormGroup;
  isEdit = false;

  userobj = {
    firstName: '',
    lastName: '',
    email: '',
    id: ''
  }

  constructor(private apiService: CrudService, private formBuilder: FormBuilder) {
    this.addForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.getUserList()
  }

  getUserList() {
    this.apiService.getUsers().subscribe(res => {
      this.users = res;
      console.log(res)
    })
  }

  onSubmit() {
    this.apiService.createUser(this.addForm.value)
      .subscribe(data => {
        console.log('User Added Successfully')
        this.getUserList();
        this.addForm.reset();
      });
  }

  editUser(user: any) {
    this.isEdit =  true;
    this.userobj = user;
  }

  deleteUser(user: any) {
    this.apiService.deleteUser(user.id).subscribe(() => {
      this.getUserList();
    })
  }

  updateUser(){
    this.isEdit = !this.isEdit;
    this.apiService.updateUser(this.userobj).subscribe(()=>{
      this.getUserList();
      this.addForm.reset();
    })
  }
}
