import { Component, OnInit } from '@angular/core';
import { Incident } from '../../models/incident';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-list-incident',
  templateUrl: './list-incident.component.html',
  styleUrls: ['./list-incident.component.scss']
})
export class ListIncidentComponent implements OnInit {
  incidents: Incident[];

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getIncidents()
      .subscribe(data => {
        this.incidents = data;
      },
        err => alert(err)
      );
  }

  deleteIncident(incident: Incident) {
    this.apiService.deleteIncident(incident.id)
      .subscribe(data => {
        this.incidents = this.incidents.filter(u => u !== incident)
        alert("Deletion successfull.")
      },
        err => alert(err));
  }

  addIncident() {
    this.router.navigate(['add-incident']);
  }

  editIncident(incident: Incident) {
    window.localStorage.removeItem("editIncidentid");
    window.localStorage.setItem("editIncidentid", incident.id.toString());
    this.router.navigate(['edit-incident']);
  }

}
