import { InMemoryDataService } from './in-memory-data/in-memory-data.service';
import { ProjectsModule } from './modules/projects/projects.module';
import { AuthorizedModule } from './modules/authorized/authorized.module';
import { LoginModule } from './modules/login/login.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        LoginModule,
        AuthorizedModule,
        ProjectsModule,
        HttpClientModule,

        HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService)
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
