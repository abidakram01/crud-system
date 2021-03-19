import { Component, Input, OnInit } from '@angular/core';
import { SocialAuthService, SocialUser } from "angularx-social-login";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  user: SocialUser;
  loggedIn: boolean;

  constructor(private authService: SocialAuthService) {}

  ngOnInit() {
    this.authService.authState.subscribe(user => {
      this.user = user;
      this.loggedIn = user != null;
    });
  }

  signOut(): void {
    this.authService.signOut();
  }

}
