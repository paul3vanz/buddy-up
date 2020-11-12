import { AuthGuard } from '../core/guards/auth.guard';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GroupsComponent } from './components/groups/groups.component';
import { GroupsPageComponent } from './containers/groups-page/groups-page.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

const routes = [
  {
    path: '',
    component: GroupsPageComponent,
    canActivate: [ AuthGuard ],
  },
];

@NgModule({
  declarations: [GroupsPageComponent, GroupsComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild(routes),
  ]
})
export class GroupsModule { }
