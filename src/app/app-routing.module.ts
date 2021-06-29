import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GuidanceComponent} from './guidance/guidance.component';

export const appRoutes: Routes = [
  { path: '', component: GuidanceComponent },
];

@NgModule({

  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
