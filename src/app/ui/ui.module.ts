import { PostsComponent } from './../pages/posts/posts.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from '../pages/welcome/welcome.component';
import { GalleriesComponent } from '../photo/galleries/galleries.component';
import { FeedComponent } from '../photo/feed/feed.component';
import { SetComponent } from '../photo/set/set.component';
import { PhotoComponent } from '../photo/photo/photo.component';
import { SearchComponent } from '../photo/search/search.component';

const appRoutes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'photos/galleries', component: GalleriesComponent },
  { path: 'photos/feed', component: FeedComponent },
  { path: 'photos/set/:id', component: SetComponent },
  { path: 'photo/:id', component: PhotoComponent },
  { path: 'photos/search', component: SearchComponent },

];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
  ],
  declarations: [LayoutComponent, HeaderComponent, FooterComponent],
  exports: [LayoutComponent]
})
export class UiModule { }
