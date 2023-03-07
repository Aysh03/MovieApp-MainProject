import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { PlayMovieComponent } from './play-movie/play-movie.component';
import { FeedBackComponent } from './feed-back/feed-back.component';
import { SearchComponent } from './search/search.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HeaderComponent } from './header/header.component';
import { MatIconModule } from '@angular/material/icon';

import { ProgressComponent } from './progress/progress.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDialogModule } from '@angular/material/dialog';
import { DeleteComponent } from './delete/delete.component';
import { AdminEditCompComponent } from './admin-edit-comp/admin-edit-comp.component';
import { SearchPipe } from './Pipeline/search.pipe';

import { ToastrModule } from 'ngx-toastr';
import { FavouritesComponent } from './favourites/favourites.component';
import { FooterComponent } from './footer/footer.component';
import {MatButtonModule} from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatListModule } from '@angular/material/list';
import { DialogComponent } from './dialog/dialog.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { ScrollDirective } from './scroll.directive';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegistrationComponent,
    LoginComponent,
    AdminDashboardComponent,
    UserDashboardComponent,
    PlayMovieComponent,
    FeedBackComponent,
    SearchComponent,
    PageNotfoundComponent,
    HeaderComponent,
    ProgressComponent,
    DeleteComponent,
    AdminEditCompComponent,
    SearchPipe,
    FavouritesComponent,
    FooterComponent,
    DialogComponent,
    ScrollDirective,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatRadioModule,
    MatSelectModule,
    MatToolbarModule,
    MatCardModule,
    MatSnackBarModule,
    MatIconModule,
    MatExpansionModule,
    MatDialogModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-center',
      preventDuplicates: true,
      timeOut: 4000, //5seconds
    }),
    MatSidenavModule,
    MatListModule,
    MatTooltipModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
// platformBrowserDynamic().bootstrapModule(AppModule);
