import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PeopleListComponent } from './people-list.component';
import { AddPeopleComponent } from './add-people.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { PeopleHomeComponent } from './people-home.component';
import { PeopleDetailsComponent } from './details.component';
import { EditPeopleComponent } from './edit-people.component';
import { DeletePeopleComponent } from './delete-people.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { People } from './People';
import { SearchByNamePipe } from './search-by-name.pipe';

const appRoutes: Routes = [
  { path: '', component: PeopleHomeComponent },
  { path: 'employees', component: PeopleListComponent },
  { path: 'addEmployee', component: AddPeopleComponent },
  { path: 'details/:id', component: PeopleDetailsComponent },
  { path: 'editEmployee/:id', component: EditPeopleComponent },
  { path: 'deleteEmployee/:id', component: DeletePeopleComponent },
  { path: '**', component: PageNotFoundComponent },
];
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
    }),
  ],
  declarations: [
    AppComponent,
    PeopleHomeComponent,
    PeopleListComponent,
    AddPeopleComponent,
    EditPeopleComponent,
    DeletePeopleComponent,
    PeopleDetailsComponent,
    PageNotFoundComponent,
    SearchByNamePipe,
    SearchByNamePipe,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
