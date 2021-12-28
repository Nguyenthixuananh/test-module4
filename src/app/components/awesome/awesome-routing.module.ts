import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AwesomeListComponent} from "./awesome-list/awesome-list.component";
import {AwesomeCreateComponent} from "./awesome-create/awesome-create.component";
import {AwesomeEditComponent} from "./awesome-edit/awesome-edit.component";
import {AwesomeDeleteComponent} from "./awesome-delete/awesome-delete.component";

const routes: Routes = [
  {
    path: 'list',
    component: AwesomeListComponent
  },{
    path: 'create',
    component: AwesomeCreateComponent
  },{
    path: 'update/:id',
    component: AwesomeEditComponent
  },{
    path: 'delete/:id',
    component: AwesomeDeleteComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AwesomeRoutingModule { }
