import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SystemComponent } from './system.component';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
	declarations: [SystemComponent],
	imports: [
		CommonModule,
		MatIconModule,
		RouterModule.forChild([
			{
				path: '',
				component: SystemComponent,
			},
		]),
		MatButtonModule,
		MatChipsModule,
	],
})
export class SystemModule {}
