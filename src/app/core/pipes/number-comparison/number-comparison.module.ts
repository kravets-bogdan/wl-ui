import { NgModule } from '@angular/core';
import { NumberComparisonPipe } from './number-comparison.pipe';

@NgModule({
	declarations: [NumberComparisonPipe],
	exports: [NumberComparisonPipe],
})
export class NumberComparisonModule {}
