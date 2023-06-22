import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulesComponent } from './modules.component';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { JobSeekerComponent } from './job-seeker/job-seeker.component';
import { CompanyComponent } from './company/company.component';
import { JobComponent } from './job/job.component';
import { JobApplyComponent } from './job-apply/job-apply.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';



const routes: Routes = [
  {
    path: '',
    component: ModulesComponent,
    children: [{
      path: '',
      redirectTo: 'users',
      pathMatch: 'full'
    },
    {
      path: 'users',
      component: UsersComponent
    },
    {
      path: 'company',
      component: CompanyComponent
    },

    {
      path: 'job-seeker',
      component: JobSeekerComponent
    },

    {
      path: 'job',
      component: JobComponent
    },
    {
      path: 'job-apply',
      component: JobApplyComponent
    },
    ]
  }
]

@NgModule({
  declarations: [
    ModulesComponent,
    UsersComponent,
    JobSeekerComponent,
    CompanyComponent,
    JobComponent,
    JobApplyComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgxDatatableModule
  ]
})
export class ModulesModule { }
