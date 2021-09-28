import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// layouts
import { AdminComponent } from "./layouts/admin/admin.component";
import { AuthComponent } from "./layouts/auth/auth.component";
import { CornAdminComponent } from "./layouts/cornadmin/admin.component";

// admin views
import { DashboardComponent } from "./views/admin/dashboard/dashboard.component";
import { MapsComponent } from "./views/admin/maps/maps.component";
import { SettingsComponent } from "./views/admin/settings/settings.component";
import { TablesComponent } from "./views/admin/tables/tables.component";


// auth views
import { LoginComponent } from "./views/auth/login/login.component";
import { RegisterComponent } from "./views/auth/register/register.component";

// corn admin views
import { CornDashboardComponent } from "./views/cornadmin/dashboard/dashboard.component";
import { CornMapsComponent } from "./views/cornadmin/maps/maps.component";
import { CornSettingsComponent } from "./views/cornadmin/settings/settings.component";
import { CornTablesComponent } from "./views/cornadmin/tables/tables.component";
import { CornloginComponent } from "./views/auth/cornlogin/cornlogin.component";


// no layouts views
import { IndexComponent } from "./views/index/index.component";
import { LandingComponent } from "./views/landing/landing.component";
import { ProfileComponent } from "./views/profile/profile.component";

//auth guard
import { AuthGuard } from "./auth.guard";

const routes: Routes = [
  // admin views
  {
    path: "admin",
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      { path: "dashboard", component: DashboardComponent },
      { path: "settings", component: SettingsComponent },
      { path: "tables", component: TablesComponent },
      { path: "maps", component: MapsComponent },
      { path: "", redirectTo: "dashboard", pathMatch: "full" },
    ],
  },
  // cornadmin views
  {
    path: "cornadmin",
    component: CornAdminComponent,
    children: [
      { path: "dashboard", component: CornDashboardComponent },
      { path: "settings", component: CornSettingsComponent },
      { path: "tables", component: CornTablesComponent },
      { path: "maps", component: CornMapsComponent },
      { path: "", redirectTo: "dashboard", pathMatch: "full" },
    ],
  },
  // auth views
  {
    path: "auth",
    component: AuthComponent,
    children: [
      { path: "cornlogin", component: CornloginComponent },
      { path: "login", component: LoginComponent },
      { path: "register", component: RegisterComponent },
      { path: "", redirectTo: "cornlogin", pathMatch: "full" },
    ],
  },
  // no layout views
  { path: "profile", component: ProfileComponent },
  { path: "landing", component: LandingComponent },
  { path: "", component: IndexComponent },
  { path: "**", redirectTo: "", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
