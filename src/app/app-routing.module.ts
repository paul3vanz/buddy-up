import { RouterModule, Routes } from "@angular/router";

import { NgModule } from "@angular/core";

const routes: Routes = [
  {
    path: "login",
    loadChildren: () =>
      import("./login/login.module").then((m) => m.LoginModule),
  },
  {
    path: "profile",
    loadChildren: () =>
      import("./profile/profile.module").then((m) => m.ProfileModule),
  },
  {
    path: "groups",
    loadChildren: () =>
      import("./groups/groups.module").then((m) => m.GroupsModule),
  },
  {
    path: "members",
    loadChildren: () =>
      import("./members/members.module").then((m) => m.MembersModule),
  },
  { path: "", pathMatch: "full", redirectTo: "login" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
