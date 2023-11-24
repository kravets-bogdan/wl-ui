import { NgModule } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SspPageComponent } from './ssp-page.component';
import { SspFiltersComponent } from '@wl/modules/system/modules/ssp-page/components/ssp-filters/ssp-filters.component';
import { SspTableComponent } from '@wl/modules/system/modules/ssp-page/components/ssp-table/ssp-table.component';
import { SspNoRecordsComponent } from '@wl/modules/system/modules/ssp-page/components/ssp-no-records/ssp-no-records.component';
import { ManageSspDialogComponent } from '@wl/modules/system/modules/ssp-page/components/manage-ssp-dialog/manage-ssp-dialog.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SspPageService } from '@wl/modules/system/modules/ssp-page/ssp-page.service';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { TabGroupComponent } from './components/manage-ssp-dialog/components/tab-group/tab-group.component';
import { TabMainSettingsComponent } from './components/manage-ssp-dialog/components/tab-main-settings/tab-main-settings.component';
import { MatSlideToggleModule, _MatSlideToggleRequiredValidatorModule } from '@angular/material/slide-toggle';
import { AsyncPipe } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { OnlyIntegerNumberDirective } from './components/manage-ssp-dialog/directive/only-integer-number.directive';

@NgModule({
	declarations: [
		SspPageComponent,
		SspFiltersComponent,
		SspTableComponent,
		SspNoRecordsComponent,
		ManageSspDialogComponent,
		TabGroupComponent,
		TabMainSettingsComponent,
		OnlyIntegerNumberDirective,
	],
	imports: [
		CommonModule,
		RouterModule.forChild([
			{
				path: 'ssp',
				component: SspPageComponent,
			},
		]),
		MatDividerModule,
		MatTabsModule,
		MatSelectModule,
		MatButtonModule,
		AsyncPipe,
		MatTableModule,
		MatSlideToggleModule,
		MatSortModule,
		MatDialogModule,
		MatIconModule,
		MatFormFieldModule,
		MatInputModule,
		MatSelectModule,
		MatAutocompleteModule,
		FormsModule,
		NgFor,
		MatChipsModule,
		ReactiveFormsModule,
		MatTooltipModule,
	],
	providers: [],
})
export class SspPageModule {}
