export interface SSP {
	id: number;
	name: string;
	qps: number;
	bidPerformance: number;
	impressionRate: number;
	status: number;
}

export interface SSPResponse {
	metadata: any;
	data: SSP[];
}
