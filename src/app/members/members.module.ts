import { AuthGuard } from "../core/guards/auth.guard";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { MembersComponent } from "./components/members/members.component";
import { MembersPageComponent } from "./containers/members-page/members-page.component";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

const routes = [
  {
    path: "",
    component: MembersPageComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  declarations: [MembersPageComponent, MembersComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild(routes),
  ],
})
export class MembersModule {}
