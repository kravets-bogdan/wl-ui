import { IPaginationParams } from './pagination-params.interface';

export interface IResponseRecords<T> extends IPaginationParams {
	results: T[];
	cacheId?: string;
}
