import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FriendPage } from './freind.page';

const routes: Routes = [
  {
    path: '',
    component: FriendPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FreindPageRoutingModule {}
