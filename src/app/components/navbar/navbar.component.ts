import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/service/auth.service";
import { StorageService } from "src/app/service/storage.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  isCollapsed = true;
  constructor(
    private router: Router,
    private token : StorageService,
    private authService: AuthService,
    private storageService: StorageService
    ) {
    router.events.subscribe(val => {
      this.isCollapsed = true;
    });
  }
  mobileView(){
    if (window.innerWidth < 992) {
        return true;
    }
    return false;
  }

  ngOnInit() {
    this.getRoleAndUsername();
  }

  role : any;
  username : any;
  getRoleAndUsername(){
    this.authService.currentUser.subscribe(
      (res) => {
        this.role = res.roles[0];
        this.username = res.username;
        console.log("username : ",this.username);
      }
    )
  }

  isLoggedIn(): boolean {
    return !!this.storageService.getToken();
  }

  logout() {
      this.token.signOut();
      this.router.navigate(["/examples/login-president"]);
  }

  logout2() {
    this.token.signOut();
    this.router.navigate(["/examples/login-validateur"]);
}
  
}