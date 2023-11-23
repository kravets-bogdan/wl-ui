import { DomSanitizer } from '@angular/platform-browser';
import { PipeTransform, Pipe } from '@angular/core';

@Pipe({ name: 'safeHtml' })
export class SafeHtmlPipe implements PipeTransform {
	constructor(private sanitized: DomSanitizer) {}

	transform(value: string, type: 'resUrl' | 'url' | 'script' | 'style' | 'html' = 'html'): any {
		switch (type) {
			case 'resUrl':
				return this.sanitized.bypassSecurityTrustResourceUrl(value);
			case 'url':
				return this.sanitized.bypassSecurityTrustUrl(value);
			case 'script':
				return this.sanitized.bypassSecurityTrustScript(value);
			case 'style':
				return this.sanitized.bypassSecurityTrustStyle(value);
			default:
				return this.sanitized.bypassSecurityTrustHtml(value);
		}
	}
}
