export interface ResponseGenerator<T = any> {
	config?: any;
	data?: T;
	headers?: any;
	request?: any;
	status?: number;
	statusText?: string;
}

export type RequestListGenerator<T = unknown> = T & {
	[key: string]: any;
	pageNo?: number;
	pageSize?: number;
};

export type ResponseListGenerator<T = any, K extends string = 'data'> = {
	totalPages: number;
	totalItemCount: number;
	itemCount: number;
	lastUpdateDate?: string;
} & RequestListGenerator &
	Record<K, T[]>;

export type ResponseStatus<T = any, K extends string = 'data'> = {
	success: boolean;
	errorMessage: string;
} & RequestListGenerator &
	Record<K, T[]>;
