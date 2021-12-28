import { NgModule } from '@angular/core';

//
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// app routing
import { AppRoutingModule } from './app-routing.module';

// import { HttpClientModule - HTTP_INTERCEPTORS } package
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthInterceptor } from './interceptors/auth/auth-interceptor';
import { SpinnerInterceptor } from './interceptors/spinner/spinner-interceptor';

// app component
import { AppComponent } from './app.component';

// import auth module
import { AuthModule } from './components/auth/auth.module';
import { PagesModule } from './components/pages/pages.module';

@NgModule({
  declarations: [
    AppComponent
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule,
    PagesModule,
  ],

  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SpinnerInterceptor,
      multi: true
    }
  ],

  bootstrap: [AppComponent]
})

export class AppModule { }
