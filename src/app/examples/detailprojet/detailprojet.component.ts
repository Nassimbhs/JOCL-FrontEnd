import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Projet } from 'src/app/models/Projet';
import { ProjetService } from 'src/app/service/projet.service';

@Component({
  selector: 'app-detailprojet',
  templateUrl: './detailprojet.component.html',
})
export class DetailprojetComponent implements OnInit {

  id : number;
  proj: Projet;
  constructor(private route: ActivatedRoute,private projectService: ProjetService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.projectService.getProjetById(this.id).subscribe(
      (res) => {
        this.proj = res;
      }
    )
  }

}