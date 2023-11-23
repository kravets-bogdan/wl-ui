import { NgModule } from '@angular/core';
import { TruncateStringPipe } from './truncate-string.pipe';

@NgModule({
	declarations: [TruncateStringPipe],
	exports: [TruncateStringPipe],
})
export class TruncateStringModule {}
