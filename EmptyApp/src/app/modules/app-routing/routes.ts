import { Routes } from '@angular/router';

import { HomeComponent } from '../../components/home/home.component';
import { Test1Component } from '../../components/test1/test1.component';
import { Test2Component } from '../../components/test2/test2.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'test1', component: Test1Component },
    { path: 'test2', component: Test2Component },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];
