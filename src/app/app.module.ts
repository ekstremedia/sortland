import { BisscatComponent } from './business/bisscat/bisscat.component';
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
import {  ReactiveFormsModule, FormsModule } from '@angular/forms';
import { GooglemapsComponent } from './tur/googlemaps/googlemaps.component';
import { AllComponent } from './videos/all/all.component';
import { VideoComponent } from './video/video/video.component';
import { YoutubePlayerModule } from 'ngx-youtube-player';
import {VgCoreModule} from 'videogular2/core';
import {VgControlsModule} from 'videogular2/controls';
import {VgOverlayPlayModule} from 'videogular2/overlay-play';
import {VgBufferingModule} from 'videogular2/buffering';
import { VideomenyComponent } from './videos/videomeny/videomeny.component';
import { PlaylistComponent } from './videos/playlist/playlist.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PhotomenyComponent } from './photo/photomeny/photomeny.component';
import { BlogpostsComponent } from './blog/blogposts/blogposts.component';
import { OverviewComponent } from './aurora/overview/overview.component';
import { AllbusinessesComponent } from './business/allbusinesses/allbusinesses.component';
import { BusinessComponent } from './business/business/business.component';
import { SmbComponent } from './business/smb/smb.component';
import { AddbusinessComponent } from './business/addbusiness/addbusiness.component';
import { AddbissComponent } from './business/addbiss/addbiss.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './user/login/login.component';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { BisstypesComponent } from './business/bisstypes/bisstypes.component';
import { TerjeComponent } from './terje/terje.component';
import { LedigestillingerComponent } from './tjenester/ledigestillinger/ledigestillinger.component';

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
    VideomenyComponent,
    PlaylistComponent,
    PhotomenyComponent,
    BlogpostsComponent,
    OverviewComponent,
    AllbusinessesComponent,
    BusinessComponent,
    SmbComponent,
    AddbusinessComponent,
    AddbissComponent,
    LoginComponent,
    BisstypesComponent,
    BisscatComponent,
    TerjeComponent,
    LedigestillingerComponent
  ],
  imports: [
    NgbModule,
    BrowserAnimationsModule,
    HttpClientModule,
    BrowserModule,
    CommonModule,
    YoutubePlayerModule,
    HttpModule,
    HttpClientJsonpModule,
    UiModule,
    ReactiveFormsModule,
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
