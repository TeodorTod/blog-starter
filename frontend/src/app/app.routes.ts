import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '', loadComponent: () => import('./pages/home/home.component').then(c => c.HomeComponent)
    },
    {
        path: 'create-post', loadComponent: () => import('./pages/create-post/create-post.component').then((c) => c.CreatePostComponent)
    },
    {
        path: 'edit-post/:id', loadComponent: () => import('./pages/edit-post/edit-post.component').then((c) => c.EditPostComponent)
    },
]
