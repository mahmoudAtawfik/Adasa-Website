import { Routes } from '@angular/router';
import { Home } from './pages/home/home/home';
import { Blog } from './pages/blog/blog/blog';
import { About } from './pages/about/about/about';
import { Notfound } from './shared/notfound/notfound/notfound';
import { BlogDetails } from './pages/blog/pages/blog-details/blog-details';
import { PrivacyPolicy } from './shared/components/privacy-policy/privacy-policy';
import { Terms } from './shared/components/terms/terms';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: Home,

  },
  {
    path: 'blog',
    component: Blog,
  },
  {
    path: 'blog/:slug',
    component: BlogDetails,
  },
  {
    path: 'blog/:slug/:id',
    component: BlogDetails,
  },
  {
    path: 'about',
    component: About,
  },
  {
    path: 'privacy',
    component: PrivacyPolicy,
  },
  {
    path: 'terms',
    component: Terms,
  },
  {
    path: '**',
    component: Notfound,
  }
];
