import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: 'sign-up',
		loadChildren: () => import('./auth/sign-up/sign-up.module').then(m => m.SignUpPageModule)
	},
	{
		path: '',
		redirectTo: 'sign-up',
		pathMatch: 'full'
	},
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
	],
	exports: [RouterModule]
})
export class AppRoutingModule { }
