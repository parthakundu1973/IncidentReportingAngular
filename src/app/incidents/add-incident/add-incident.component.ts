import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-incident',
  templateUrl: './add-incident.component.html',
  styleUrls: ['./add-incident.component.scss']
})
export class AddIncidentComponent implements OnInit {
  addForm: FormGroup;
  submitted: boolean= false;
  constructor(private formBuilder:FormBuilder, private router:Router, private apiService:ApiService) { }

  ngOnInit(): void {

    this.addForm = this.formBuilder.group(
      {
        subject: ['',[ Validators.required,Validators.maxLength(20) ]],
        description: ['', Validators.required],
        incidentDateTime: ['', Validators.required],
        location: ['', Validators.required]
      });
  }

  get field() {
    return this.addForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.addForm.invalid)
      return;

    this.apiService.createIncident(this.addForm.value)
      .subscribe(data => this.router.navigate(['list-incident']));
  }
}
