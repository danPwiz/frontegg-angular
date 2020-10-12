import { NgModule } from '@angular/core';

import { TeamComponent } from './team.component';
import { RouterModule } from '@angular/router';
import { CoreModule } from '@frontegg/ng-core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    TeamComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    CoreModule,
  ],
})
export class TeamModule {
}
