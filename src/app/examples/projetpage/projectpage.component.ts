import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/service/auth.service";
import { ProjetService } from "src/app/service/projet.service";
import Swal from "sweetalert2";

@Component({
  selector: "app-projectpage",
  templateUrl: "projectpage.component.html"
})
export class ProjectpageComponent implements OnInit {

  p: number = 1;
  pageSize: number = 5;

  constructor(private ProjetService: ProjetService,private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.getprojects();
  }

  project: any;
  getprojects(){
    this.ProjetService.getProjects().subscribe(
      (res) => {
        this.project = res;
        console.log("projects : ",this.project);
      }
    )
  }

  update(id: any, s: any): void {
    Swal.fire({
      title: 'Confirmation',
      text: `Êtes-vous sûr de vouloir "${s}" le projet ?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Oui, mettre à jour !',
      cancelButtonText: 'Non, annuler',
    }).then((result) => {
      if (result.isConfirmed) {
        this.ProjetService.updateProjectStatus(id, s).subscribe(
          res => {
            this.getprojects();
            console.log(res);
          }
        );
      }
    });
  }
  
  titre: any;
  search() {
    if (this.titre === '') {
      this.ngOnInit();
    } else {
      this.project = this.project.filter(res => {
        return res.titre && res.titre.toLowerCase().includes(this.titre.toLowerCase());
      });
    }
  }

  key: string = 'id';
  reverse: boolean = false;
  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }

  detail(id: number) {
    this.router.navigate(['/examples/detail', id]);
  }
  
  role : any;
  username : any;
  getRoleAndUsername(){
    this.authService.currentUser.subscribe(
      (res) => {
        this.role = res.roles[0];
        this.username = res.username;
      }
    )
  }

}