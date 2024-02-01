import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Projet } from "src/app/models/Projet";
import { ProjetService } from "src/app/service/projet.service";
import Swal from "sweetalert2";

@Component({
  selector: "app-addproject",
  templateUrl: "addproject.component.html"
})
export class AddProjectComponent implements OnInit {

  projectForm: FormGroup;

  constructor(private fb: FormBuilder,private projectService: ProjetService,private router: Router) {}

  ngOnInit() {
    this.projectForm = this.fb.group({
      titre: ['', Validators.required],
      lieu: ['', Validators.required],
      debut: ['', Validators.required],
      fin: ['', Validators.required],
      category: ['', Validators.required],
      description: ['', Validators.required],
      budget: ['', Validators.required]

    });
  }

  projet: Projet = new Projet();
  addProject() {
    this.projectService.addProject(this.projet).subscribe(
      (res) => {
        console.log(res);
        Swal.fire({
          icon: 'success',
          title: 'Succès',
          text: 'Projet ajouté avec succès !',
          timer: 2000,
          showConfirmButton: false
        });
        this.router.navigate(["examples/president-page"]);
       }
    )
  }

}