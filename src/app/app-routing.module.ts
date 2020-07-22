import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'login',
		pathMatch: 'full'
	},
	{
		path: 'sign-up',
		loadChildren: () => import('./auth/sign-up/sign-up.module').then(m => m.SignUpPageModule)
	},
	{
		path: 'login',
		loadChildren: () => import('./auth/login/login.module').then(m => m.LoginPageModule)
	},
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
	],
	exports: [RouterModule]
})
export class AppRoutingModule { }
