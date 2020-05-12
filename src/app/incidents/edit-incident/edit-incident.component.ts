import { Component, OnInit } from '@angular/core';
import { Incident } from '../../models/incident';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-incident',
  templateUrl: './edit-incident.component.html',
  styleUrls: ['./edit-incident.component.scss']
})
export class EditIncidentComponent implements OnInit {
  editForm: FormGroup;
  incident:Incident
  submitted: boolean = false;

  constructor(private formbuilder: FormBuilder, private router: Router, private apiservice: ApiService , private location:Location) { }

  ngOnInit(): void {
    var incidentId = window.localStorage.getItem("editIncidentid");

    if (!incidentId) {
      alert("invalid action");
      this.router.navigate(['list-incident']);
      return;
    }

    
    this.apiservice.getIncident(Number(incidentId))
      .subscribe(data => {
        this.editForm = this.formbuilder.group(
          {
            id: [data.id],
            subject: [data.subject, Validators.required],
            description: [data.description, Validators.required],
            incidentDateTime: [new Date(data.incidentDateTime).toISOString().slice(0, -1), Validators.required],
            location: [data.location, Validators.required]
          });
      });
  }

  get field() {
    return this.editForm.controls;
  }



  onSubmit() {
    this.submitted = true;
    if (this.editForm.invalid)
      return;

    var incidentId = window.localStorage.getItem("editIncidentid");
    this.apiservice.updateIncident(Number(incidentId), this.editForm.value)
      .subscribe(data => {
        this.router.navigate(['list-incident']);
      },
        error => alert( error)
      );
  }

  goBack(): void {
    this.location.back();
  }

}
