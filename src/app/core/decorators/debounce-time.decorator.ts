export function DebounceTime(delay: number = 300) {
	return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
		let timeout: any = null;
		const original = descriptor.value;
		descriptor.value = function (...args: any[]) {
			clearTimeout(timeout);
			timeout = setTimeout(() => original.apply(this, args), delay);
		};
		return descriptor;
	};
}
