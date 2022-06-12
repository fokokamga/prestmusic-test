import { ContactComponent } from './pages/contact/contact.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { WorksComponent } from './pages/works/works.component';
import { AccountComponent } from './pages/account/account.component';
import { LegalNoticeComponent } from './pages/legal-notice/legal-notice.component';
import { TermsOfUseComponent } from './pages/terms-of-use/terms-of-use.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'nous-contacter', component: ContactComponent },
  { path: 'a-propos', component: AboutComponent },
  { path: 'mention-legales', component: LegalNoticeComponent },
  { path: 'cgu', component: TermsOfUseComponent },
  { path: 'mon-compte', component: AccountComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    scrollOffset: [0, 64] // [x, y]
  })
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
