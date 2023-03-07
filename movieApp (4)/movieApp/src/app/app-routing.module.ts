import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component'
import { HomeComponent } from './home/home.component'
import { LoginComponent } from './login/login.component'
import { RegistrationComponent } from './registration/registration.component'
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component'

import { PlayMovieComponent } from './play-movie/play-movie.component'
import { FavouritesComponent } from './favourites/favourites.component'
import { FeedBackComponent } from './feed-back/feed-back.component'
import { AuthGuardGuard } from './guards/auth-guard.guard'
import { CanDeactivateGuard } from './guards/can-deactivate.guard'
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent,canDeactivate:[CanDeactivateGuard] },
  { path: 'register', component: RegistrationComponent,canDeactivate:[CanDeactivateGuard]},
  { path: 'AdminView', component: AdminDashboardComponent,canActivate:[AuthGuardGuard] }, 
  { path: 'userView', component: UserDashboardComponent,canActivate:[AuthGuardGuard] },
  // { path: 'userView', component: UserDashboardComponent },
  { path: 'playMovie', component: PlayMovieComponent,canActivate:[AuthGuardGuard] },
{path:'favourites',component:FavouritesComponent,canActivate:[AuthGuardGuard]},
{path:'feedback',component:FeedBackComponent,canActivate:[AuthGuardGuard]},

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  { path: '**', component: HomeComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
