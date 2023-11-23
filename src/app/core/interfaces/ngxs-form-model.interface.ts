export interface INgxsFormModel<T> {
	model: T;
	dirty: boolean;
	status: 'VALID' | 'INVALID' | 'PENDING' | 'DISABLED' | '';
	errors: Record<string, any> | null;
}
