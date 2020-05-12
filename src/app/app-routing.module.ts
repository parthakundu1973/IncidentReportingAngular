import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddIncidentComponent } from './incidents/add-incident/add-incident.component';
import { ListIncidentComponent } from './incidents/list-incident/list-incident.component';
import { EditIncidentComponent } from './incidents/edit-incident/edit-incident.component';


const routes: Routes = [
  { path: "add-incident", component: AddIncidentComponent},
  { path: "list-incident", component: ListIncidentComponent },
  { path: "edit-incident", component: EditIncidentComponent },
  {path:"",component:ListIncidentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
