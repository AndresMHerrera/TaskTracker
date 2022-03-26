import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from './../modules/layout/layout.module';
import { AppConfigService } from './../modules/shared/services/app-config/app-config.service';
import { ProjectsModule } from './../modules/projects/projects.module';
import { LoginModule } from './../modules/login/login.module';
import { InMemoryDataService } from './in-memory-data/in-memory-data.service';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { configurationLoader } from './initializers/app-initializer-methods';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LoginModule,
    ProjectsModule,
    HttpClientModule,

    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    LayoutModule,

    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { passThruUnknownUrl: true }),
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      multi: true,
      deps: [ AppConfigService ],
      useFactory: configurationLoader
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
