import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContainerComponent } from './Container/container.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { NotificationComponent } from './notification/notification.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { BooksComponent } from './books/books.component';
import { BookSearchComponent } from './book-search/book-search.component';
import { BookFilterComponent } from './book-filter/book-filter.component';
import { AboutComponent } from './about/about.component';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { BookGuardService } from './book-guard.service';
import { AuthService } from './auth.service';

const appRoute: Routes = [
  {path: '', component: HeaderComponent},
  {path: 'home', component: HeaderComponent},
  {path: 'books', component: BooksComponent, canActivate: [BookGuardService]},
  {path: 'about', component: AboutComponent},
  {path: '**', component: ErrorComponent} // this should always be the last route
];

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    NavComponent,
    HeaderComponent,
    NotificationComponent,
    SearchComponent,
    BooksComponent,
    BookSearchComponent,
    BookFilterComponent,
    AboutComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [BookGuardService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
