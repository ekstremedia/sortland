import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UiModule } from './ui/ui.module';
import { AppRoutingModule } from './/app-routing.module';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { PostsComponent } from './pages/posts/posts.component';
import { GalleriesComponent } from './photo/galleries/galleries.component';
import { NgxMasonryModule } from 'ngx-masonry';
import { FeedComponent } from './photo/feed/feed.component';
import { SetComponent } from './photo/set/set.component';
import { PhotoComponent } from './photo/photo/photo.component';
import { SearchComponent } from './photo/search/search.component';
import { FormsModule } from '@angular/forms';
import { GooglemapsComponent } from './tur/googlemaps/googlemaps.component';
import { AllComponent } from './videos/all/all.component';
import { VideoComponent } from './video/video/video.component';
import { YoutubePlayerModule } from 'ngx-youtube-player';
import {VgCoreModule} from 'videogular2/core';
import {VgControlsModule} from 'videogular2/controls';
import {VgOverlayPlayModule} from 'videogular2/overlay-play';
import {VgBufferingModule} from 'videogular2/buffering';
import { VideomenyComponent } from './videos/videomeny/videomeny.component';
// from https://angular.io/guide/router


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    PostsComponent,
    GalleriesComponent,
    FeedComponent,
    SetComponent,
    PhotoComponent,
    SearchComponent,
    GooglemapsComponent,
    AllComponent,
    VideoComponent,
    VideomenyComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    YoutubePlayerModule,
    HttpClientJsonpModule,
    UiModule,
    AppRoutingModule,
    NgxMasonryModule,
    FormsModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
