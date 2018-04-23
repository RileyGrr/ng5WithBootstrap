import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { topMenuComponent } from './riley/topMenu/topMenu.component';
// import { PaperworkEditComponent } from './paperwork/paperwork-edit/paperwork-edit.component';

const routes: Routes = [
  {
    path: 'riley',
    children: [
      {
        path: 'tabContent',
        children: [
          {
            path: 'list',
            component: topMenuComponent
          },
          // {
          //   path: 'edit/:id',
          //   component: PaperworkEditComponent
          // }
        ]
      }
    ]
  }, {
    // path: 'student_paperwork/:id',
    // component: PaperworkEditComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
