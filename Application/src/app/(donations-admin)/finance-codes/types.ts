export type TableRecord = {
	id: number;
	firstName: string;
	lastName: string;
	username: string;
};

export type Employee = {
	id: number;
	age: number;
	name: string;
	company: string;
	phone: string;
	subRows?: Employee[];
};

export type FinanceCode = {
	"Form Code": string;
	"Source": string;
	"Budgetary Department": number;
	"Campaign Code": string;
	"Freehold Code": string;
	"Sub Region": string;
	"Regular Payment Campaign Code": string;
	"Regular Payment Promo Code": string;
};
