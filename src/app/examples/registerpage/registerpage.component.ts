import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "src/app/service/auth.service";
import Swal from "sweetalert2";

@Component({
  selector: "app-registerpage",
  templateUrl: "registerpage.component.html"
})
export class RegisterpageComponent implements  OnInit {
  signupForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService,private router: Router) {
    this.signupForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role: ['PRESIDENT']
    });
  }
  
  ngOnInit() {
  }

  signup() {
    const { username, email, password, role } = this.signupForm.value;
  
    this.authService.register(username, email, password, [role]).subscribe(
      response => {
        console.log(response);
  
        Swal.fire({
          title: 'Succès !',
          text: 'Inscription réussie.',
          icon: 'success',
          confirmButtonText: 'OK'
        }).then(() => {
          this.router.navigate(["examples/login-president"]);
        });
      },
      error => {
        console.error(error);
        
        Swal.fire({
          title: 'Erreur',
          text: 'L\'inscription a échoué. Veuillez réessayer.',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      }
    );
  }

}