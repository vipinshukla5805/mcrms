import { RouterModule, Routes } from '@angular/router';
// import { provideRouter } from '@angular/router';

import { SearchComponent } from './search/search.component';
import { AdminSpeakerComponent } from './admin/speaker/speaker.component';
import { SettingsComponent } from './admin/settings/settings.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';

// import { USER_ROUTES } from "./user/user.routes";    // Shows how to modularize the routes...keep it with it's other files.

const APP_ROUTES: Routes = [
    // { path: 'user/:id', component: UserComponent },
    // { path: 'user/:id', component: UserComponent, children: USER_ROUTES },
    { path: 'admin', component: AdminSpeakerComponent },
    { path: 'settings', component: SettingsComponent },
    { path: 'landing', component: LandingComponent },
    { path: 'search', component: SearchComponent },
    { path:'',  component: LoginComponent},
    { path: '**', redirectTo: '/admin/speaker/', pathMatch: 'full' }
];

// export const APP_ROUTES_PROVIDER = [
//     provideRouter(APP_ROUTES)
// ];
export const routing = RouterModule.forRoot(APP_ROUTES); 