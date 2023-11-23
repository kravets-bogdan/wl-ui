import { Injectable } from '@angular/core';
import {SSPResponse} from "@wl/core";

@Injectable()
export class SspPageService {

  constructor() { }

	getTableData(): SSPResponse {
	  const tableData = {
		  "metadata": {},
		  "data": [
			  {
				  "id": 1,
				  "name": "Vova first ssp",
				  "qps": 0,
				  "bidPerformance": 0,
				  "impressionRate": 0,
				  "status": 1
			  },
			  {
				  "id": 2,
				  "name": "Vova second ssp",
				  "qps": 0,
				  "bidPerformance": 0,
				  "impressionRate": 0,
				  "status": 1
			  },
			  {
				  "id": 3,
				  "name": "Vova 3rd ssp",
				  "qps": 0,
				  "bidPerformance": 0,
				  "impressionRate": 0,
				  "status": 1
			  },
			  {
				  "id": 4,
				  "name": "Vova 4th ssp",
				  "qps": 0,
				  "bidPerformance": 0,
				  "impressionRate": 0,
				  "status": 1
			  },
			  {
				  "id": 6,
				  "name": "API created ssp 1",
				  "qps": 0,
				  "bidPerformance": 0,
				  "impressionRate": 0,
				  "status": -1
			  },
			  {
				  "id": 5,
				  "name": "API create ssp modified",
				  "qps": 0,
				  "bidPerformance": 0,
				  "impressionRate": 0,
				  "status": 1
			  }
		  ]
	  }
	  return tableData;

	}
}
