import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RecorderComponent } from './pages/recorder/recorder.component';
import { PreviewVideoComponent } from './pages/preview-video/preview-video.component';
const routes: Routes = [

  { path: 'home', component: HomePageComponent },
  { path: 'rec', component: RecorderComponent },
  { path: 'previewVideo', component: PreviewVideoComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' },
];

const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
