import { Routes, RouterModule} from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { LoginComponent } from './component/login/login.component';
import { PrincipalComponent } from './component/principal/principal.component';





const appRoutes: Routes = [
{ path: '', redirectTo: '/login', pathMatch: 'full'},
{ path: 'login', component: LoginComponent },
{path: 'principal', component: PrincipalComponent},
] ;

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
