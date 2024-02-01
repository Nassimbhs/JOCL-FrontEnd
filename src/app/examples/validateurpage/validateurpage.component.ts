import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjetService } from 'src/app/service/projet.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-validateurpage',
  templateUrl: './validateurpage.component.html',
})
export class ValidateurpageComponent implements OnInit {

  p: number = 1;
  pageSize: number = 5;

  constructor(private projetService: ProjetService, private router: Router) {}

  ngOnInit() {
    this.getprojects();
  }

  project: any;
  getprojects(){
    this.projetService.getProjects().subscribe(
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
        this.projetService.updateProjectStatus(id, s).subscribe(
          res => {
            this.getprojects();
            console.log(res);
          }
        );
      }
    });
  }

  searchText : any = '';
  get filteredUserList() {
    return this.project.filter(u => u.project.titre.toLowerCase().includes(this.searchText.toLowerCase()));
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

}