import { APP_INITIALIZER, isDevMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { inject } from "@vercel/analytics";
import { NgcCookieConsentConfig, NgcCookieConsentModule, provideNgcCookieConsent } from 'ngx-cookieconsent';
import { NgxPaginationModule } from 'ngx-pagination';

import { provideRouter } from '@angular/router';
import { AppRoutingModule, routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';


const cookieConfig:NgcCookieConsentConfig = {
  cookie: {
    domain: 'localhost' // or 'your.domain.com' // it is mandatory to set a domain, for cookies to work properly (see https://goo.gl/S2Hy2A)
  },
  palette: {
    popup: {
      background: '#000'
    },
    button: {
      background: '#f1d600'
    }
  },
  theme: 'edgeless',
  type: 'opt-out'
};

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent
  ],
  imports: [
    NgcCookieConsentModule.forRoot(cookieConfig),
    BrowserModule,
    NgxPaginationModule,
    AppRoutingModule,
    SweetAlert2Module.forRoot(),
  ],
  providers: [provideNgcCookieConsent(cookieConfig),
    provideRouter(routes),
    {
      provide: APP_INITIALIZER,
      useFactory: () => {
        inject({ mode: isDevMode() ? 'development' : 'production' })
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
