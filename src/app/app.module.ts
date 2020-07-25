import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

const userRouteModule = {
  path: 'users',
  loadChildren: () => import('./user-module/user.module').then(m => m.UserModule)
};

const postRouteModule = {
  path: 'posts',
  loadChildren: () => import('./post-module/post.module').then(p => p.PostModule)
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      userRouteModule,
      postRouteModule
    ]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
