import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SspPageModule } from '@wl/modules/system/modules/ssp-page/ssp-page.module';
import { SspPageComponent } from '@wl/modules/system/modules/ssp-page/ssp-page.component';

const routes: Routes = [
	{ path: '', loadChildren: () => import('./modules/system').then(m => m.SystemModule) },
	{ path: 'ssp', component: SspPageComponent },
];
//loadChildren: () => import('./modules/system/modules/ssp-page').then(m => m.SspPageModule)

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
