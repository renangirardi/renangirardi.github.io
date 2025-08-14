import { Routes } from '@angular/router';
import { HomepageComponent } from './features/pages/homepage/homepage.component';
import { AboutMeComponent } from './features/pages/about-me/about-me.component';
import { ContactComponent } from './features/pages/contact/contact.component';
import { CvComponent } from './features/pages/cv/cv.component';
import { PortfolioComponent } from './features/pages/portfolio/portfolio.component';

export const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
    title: 'Renan Girardi - Homepage'
  },
  {
    path: 'about-me',
    component: AboutMeComponent,
    title: 'Renan Girardi - About Me'
  },
  {
    path: 'cv',
    component: CvComponent,
    title: 'Renan Girardi - CV'
  },
  {
    path: 'portfolio',
    component: PortfolioComponent,
    title: 'Renan Girardi - Portfolio'
  },
  {
    path: 'contact',
    component: ContactComponent,
    title: 'Renan Girardi - Contact'
  }
];
