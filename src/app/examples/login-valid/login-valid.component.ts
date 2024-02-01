import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { StorageService } from 'src/app/service/storage.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-valid',
  templateUrl: './login-valid.component.html',
})
export class LoginValidComponent implements OnInit {

  hide = true;
  errorMessage = '';
  roles: string[] = [];
  isLoggedIn = false;
  isLoginFailed = false;
  form: any = {
    username: '',
    password: ''
  };

  constructor(
    private authService: AuthService,
    private storageService: StorageService,
    private router: Router
    ) {}

  ngOnInit() {
    if (this.storageService.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.storageService.getUser().roles;
    }
    if (this.isLoggedIn) {
      this.router.navigate(["/examples/validateur-page"]);
    }
  }

  
  onSubmit(): void {
    this.authService.login(this.form).subscribe(
      data => {
        this.storageService.saveToken(data.accessToken);
        this.storageService.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.storageService.getUser().roles;
        if (this.roles.includes("VALIDATEUR")) {
          this.router.navigate(["examples/validateur-page"]);
        }
      },
      err => {
        this.isLoginFailed = true;
        this.errorMessage = err.error.message;
        Swal.fire({
          icon: 'error',
          title: 'La connexion a échoué',
          text: 'Le nom d\'utilisateur ou le mot de passe est incorrect. Veuillez réessayer.',
        });
        }
    );
  }

}