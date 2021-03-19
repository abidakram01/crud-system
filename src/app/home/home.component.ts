import { Component, OnInit, Inject } from '@angular/core';
import { Router } from "@angular/router";
import { CrudService } from '../service/crud.service';
import { Crud } from '../shared/crud';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  users: Crud[];

  constructor(private router: Router, private apiService: CrudService) { }

  ngOnInit() {

    this.apiService.getUsers().subscribe(result => {
      this.users = result;
    });
  }

  deleteUser(user: Crud): void {
    this.apiService.deleteUser(user.id)
      .subscribe(data => {
        this.users = this.users.filter(u => u !== user);
      })
  };

  editUser(user: Crud): void {
    window.localStorage.removeItem("editUserId");
    window.localStorage.setItem("editUserId", user.id.toString());
    this.router.navigate(['edit-user']);
  };

  addUser(): void {
    this.router.navigate(['add-user']);
  };

}
