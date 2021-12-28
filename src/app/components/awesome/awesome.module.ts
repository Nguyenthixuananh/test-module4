import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AwesomeRoutingModule } from './awesome-routing.module';
import {AwesomeListComponent} from "./awesome-list/awesome-list.component";
import {AwesomeCreateComponent} from "./awesome-create/awesome-create.component";
import {AwesomeDeleteComponent} from "./awesome-delete/awesome-delete.component";
import {AwesomeEditComponent} from "./awesome-edit/awesome-edit.component";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AwesomeListComponent,
    AwesomeCreateComponent,
    AwesomeEditComponent,
    AwesomeDeleteComponent
  ],
  imports: [
    CommonModule,
    AwesomeRoutingModule,
    ReactiveFormsModule
  ]
})
export class AwesomeModule { }
