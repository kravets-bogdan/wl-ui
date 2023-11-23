export interface MenuItem {
	title: string;
	displayName: string;
	icon?: string;
	children?: MenuViewItem[] | [];
	url?: string;
	name?: string;
}

export interface MenuViewItem {
	menuItem: MenuItem;
	isActive: boolean;
	isCurrent: boolean;
}

export const NetworkMenu: MenuViewItem[] = [
	{
		menuItem: {
			title: 'Dashboard',
			displayName: 'Dashboard',
			name: 'Dashboard',
			icon: 'Dashboard',
			url: '/hb-dashboard',
			children: [],
		},
		isActive: false,
		isCurrent: false,
	},
	{
		menuItem: {
			title: 'Reporting',
			displayName: 'Reporting',
			name: 'Reporting',
			icon: 'Reporting',
			url: '/hb-reporting',
			children: [],
		},
		isActive: false,
		isCurrent: false,
	},
	{
		menuItem: {
			title: 'Inventory',
			displayName: 'Inventory',
			name: 'InventoryList',
			children: [
				{
					menuItem: {
						title: 'SSPs',
						displayName: 'SSPs',
						name: 'SSPsList',
						icon: 'SSPs',
						url: '/hb-sites',
						children: [],
					},
					isActive: false,
					isCurrent: false,
				},
				{
					menuItem: {
						title: 'Global Inventory Filters',
						displayName: 'Global Inventory Filters',
						name: 'Global Inventory Filters',
						icon: 'GlobalInventoryFilters',
						url: '/hb-sites',
						children: [],
					},
					isActive: false,
					isCurrent: false,
				},
				{
					menuItem: {
						title: 'Inventory Quality',
						displayName: 'Inventory Quality',
						name: 'Inventory Quality',
						icon: 'InventoryQuality',
						url: '/hb-sites',
						children: [],
					},
					isActive: false,
					isCurrent: false,
				},
				{
					menuItem: {
						title: 'Request Validation',
						displayName: 'Request Validation',
						name: 'Request Validation',
						icon: 'RequestValidation',
						url: '/hb-sites',
						children: [],
					},
					isActive: false,
					isCurrent: false,
				},
				{
					menuItem: {
						title: 'Packages',
						displayName: 'Packages',
						name: 'Packages',
						icon: 'Packages',
						url: '/hb-sites',
						children: [],
					},
					isActive: false,
					isCurrent: false,
				},
			],
		},
		isActive: false,
		isCurrent: false,
	},
	{
		menuItem: {
			title: 'Demand',
			displayName: 'Demand',
			name: 'DemandList',
			children: [
				{
					menuItem: {
						title: 'DSPs',
						displayName: 'DSPs',
						name: 'DSPs',
						icon: 'DSPs',
						url: '/hb-buyers',
						children: [],
					},
					isActive: false,
					isCurrent: false,
				},
				{
					menuItem: {
						title: 'General Demand Rules',
						displayName: 'General Demand Rules',
						name: 'General Demand Rules',
						icon: 'GeneralDemandRules',
						url: '/hb-buyers',
						children: [],
					},
					isActive: false,
					isCurrent: false,
				},
				{
					menuItem: {
						title: 'Creative Validation',
						displayName: 'Creative Validation',
						name: 'Creative Validation',
						icon: 'CreativeValidation',
						url: '/hb-buyers',
						children: [],
					},
					isActive: false,
					isCurrent: false,
				},
				{
					menuItem: {
						title: 'Bid Validation',
						displayName: 'Bid Validation',
						name: 'Bid Validation',
						icon: 'BidValidation',
						url: '/hb-buyers',
						children: [],
					},
					isActive: false,
					isCurrent: false,
				},
			],
		},
		isActive: false,
		isCurrent: false,
	},
];
