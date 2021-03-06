import { SoknadComponent } from './../soknad/soknad.component';
import { BildeComponent } from './../pages/bilde/bilde.component';
import { BilderComponent } from './../pages/bilder/bilder.component';
import { LedigestillingerComponent } from './../tjenester/ledigestillinger/ledigestillinger.component';
import { BisscatComponent } from './../business/bisscat/bisscat.component';
import { BisstypesComponent } from './../business/bisstypes/bisstypes.component';
import { AddbissComponent } from './../business/addbiss/addbiss.component';
import { BusinessComponent } from './../business/business/business.component';
import { BlogpostsComponent } from './../blog/blogposts/blogposts.component';
import { AllComponent } from './../videos/all/all.component';
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
import { GooglemapsComponent } from '../tur/googlemaps/googlemaps.component';
import { VideoComponent } from '../video/video/video.component';
import { PlaylistComponent } from '../videos/playlist/playlist.component';
import { OverviewComponent } from '../aurora/overview/overview.component';
import { AllbusinessesComponent } from '../business/allbusinesses/allbusinesses.component';
import { YoutubePlayerService } from 'ngx-youtube-player/src/ngx-youtube-player';
import { LoginComponent } from '../user/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TerjeComponent } from '../terje/terje.component';
import { WebutviklingComponent } from '../webutvikling/webutvikling.component';

const appRoutes: Routes = [
  { path: '', component: AllbusinessesComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'photos/galleries', component: GalleriesComponent },
  { path: 'photos/feed', component: FeedComponent },
  { path: 'photos/set/:id', component: SetComponent },
  { path: 'photo/:id', component: PhotoComponent },
  { path: 'photos/search', component: SearchComponent },
  { path: 'tur/googlemaps', component: GooglemapsComponent },
  { path: 'videos/all', component: AllComponent },
  { path: 'video/:id', component: VideoComponent },
  { path: 'videos/playlist/:id', component: PlaylistComponent },
  { path: 'blog', component: BlogpostsComponent },
  { path: 'aurora', component: OverviewComponent },
  { path: 'bedrifter', component: AllbusinessesComponent },
  { path: 'bedrift/:slug', component: BusinessComponent },
  { path: 'leggtil/bedrift', component: AddbissComponent },
  { path: 'login', component: LoginComponent },
  { path: 'bedrifter/:id', component: BisstypesComponent },
  { path: 'kategori/:id', component: BisscatComponent },
  { path: 'terje', component: TerjeComponent },
  { path: 'tjenester/stillinger', component: LedigestillingerComponent },
  { path: 'bilder', component: BilderComponent },
  { path: 'bilde/:id', component: BildeComponent },
  { path: 'soknad', component: SoknadComponent },
  { path: 'søknad', component: SoknadComponent },
  { path: 'webutvikling', component: WebutviklingComponent }

];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule ,
    FormsModule
  ],
  declarations: [LayoutComponent, HeaderComponent, FooterComponent],
  exports: [LayoutComponent]
})
export class UiModule { }
