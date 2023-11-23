export interface ThrottleOptions {
	/**
	 * Fire immediately on the first call.
	 */
	start?: boolean;
	/**
	 * Fire as soon as `wait` has passed.
	 */
	middle?: boolean;
	/**
	 * Cancel after the first successful call.
	 */
	once?: boolean;
}

interface Throttler<T extends unknown[]> {
	(...args: T): void;
	cancel(): void;
}

function throttleFn<T extends unknown[]>(
	callback: (...args: T) => unknown,
	wait = 0,
	{ start = true, middle = true, once = false }: ThrottleOptions = {},
): Throttler<T> {
	let innerStart: boolean = start;
	let last: number = 0;
	let timer: ReturnType<typeof setTimeout>;
	let cancelled: boolean = false;
	function fn(this: unknown, ...args: T): void {
		if (cancelled) return;
		const delta = Date.now() - last;
		last = Date.now();

		if (start && middle && delta >= wait) {
			innerStart = true;
		}

		if (innerStart) {
			innerStart = false;
			callback.apply(this, args);
			if (once) fn.cancel();
		} else if ((middle && delta < wait) || !middle) {
			clearTimeout(timer);
			timer = setTimeout(
				() => {
					last = Date.now();
					callback.apply(this, args);
					if (once) fn.cancel();
				},
				!middle ? wait : wait - delta,
			);
		}
	}
	fn.cancel = () => {
		clearTimeout(timer);
		cancelled = true;
	};
	return fn;
}

export function throttle(wait = 0, opts: ThrottleOptions = {}): MethodDecorator {
	return (proto: unknown, name: string | symbol, descriptor: PropertyDescriptor) => {
		if (!descriptor || typeof descriptor.value !== 'function') {
			throw new Error('throttleDecorator can only decorate functions');
		}
		const fn = descriptor.value;
		descriptor.value = throttleFn(fn, wait, opts);
		Object.defineProperty(proto, name, descriptor);
	};
}
