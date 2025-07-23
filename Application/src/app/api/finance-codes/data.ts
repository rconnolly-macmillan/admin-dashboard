const financeCodes = [
	{
		"Form Code": "default",
		"Source": "MWEB03",
		"Budgetary Department": 3,
		"Campaign Code": "",
		"Freehold Code": "NDIR",
		"Sub Region": "YYY",
		"Regular Payment Campaign Code": "",
		"Regular Payment Promo Code": ""
	},
	{
		"Form Code": "MI0004",
		"Source": "MI0004",
		"Budgetary Department": 3,
		"Campaign Code": "",
		"Freehold Code": "",
		"Sub Region": "XXX",
		"Regular Payment Campaign Code": "",
		"Regular Payment Promo Code": ""
	},
	{
		"Form Code": "MI0005",
		"Source": "MI0005",
		"Budgetary Department": 3,
		"Campaign Code": "0",
		"Freehold Code": "",
		"Sub Region": "XXX",
		"Regular Payment Campaign Code": "",
		"Regular Payment Promo Code": ""
	},
	{
		"Form Code": "MI0006",
		"Source": "MI0006",
		"Budgetary Department": 3,
		"Campaign Code": "0",
		"Freehold Code": "",
		"Sub Region": "XXX",
		"Regular Payment Campaign Code": "",
		"Regular Payment Promo Code": ""
	},
	{
		"Form Code": "bigt",
		"Source": "22184",
		"Budgetary Department": 3,
		"Campaign Code": "CEN",
		"Freehold Code": "NDIR",
		"Sub Region": "NAT",
		"Regular Payment Campaign Code": "",
		"Regular Payment Promo Code": ""
	},
	{
		"Form Code": "shop",
		"Source": "MACW09",
		"Budgetary Department": 19,
		"Campaign Code": "TDG",
		"Freehold Code": "NDIR",
		"Sub Region": "NAT",
		"Regular Payment Campaign Code": "",
		"Regular Payment Promo Code": ""
	},
	{
		"Form Code": "nurse",
		"Source": "49329",
		"Budgetary Department": 9,
		"Campaign Code": "88L",
		"Freehold Code": "NDIR",
		"Sub Region": "NAT",
		"Regular Payment Campaign Code": "88L",
		"Regular Payment Promo Code": "49330"
	},
	{
		"Form Code": "heropanel",
		"Source": "49331",
		"Budgetary Department": 9,
		"Campaign Code": "88L",
		"Freehold Code": "NDIR",
		"Sub Region": "NAT",
		"Regular Payment Campaign Code": "88L",
		"Regular Payment Promo Code": "49332"
	},
	{
		"Form Code": "lister",
		"Source": "MWEB03",
		"Budgetary Department": 3,
		"Campaign Code": "",
		"Freehold Code": "NDIR",
		"Sub Region": "YYY",
		"Regular Payment Campaign Code": "",
		"Regular Payment Promo Code": ""
	},
	{
		"Form Code": "julyappeal",
		"Source": "49490",
		"Budgetary Department": 9,
		"Campaign Code": "92R",
		"Freehold Code": "NDIR",
		"Sub Region": "NAT",
		"Regular Payment Campaign Code": "92R",
		"Regular Payment Promo Code": "49487"
	},
	{
		"Form Code": "Aug-01",
		"Source": "72770",
		"Budgetary Department": 9,
		"Campaign Code": "64M",
		"Freehold Code": "NDIR",
		"Sub Region": "NAT",
		"Regular Payment Campaign Code": "64M",
		"Regular Payment Promo Code": "72771"
	},
	{
		"Form Code": "Aug-02",
		"Source": "28125",
		"Budgetary Department": 9,
		"Campaign Code": "15M",
		"Freehold Code": "NDIR",
		"Sub Region": "NAT",
		"Regular Payment Campaign Code": "15M",
		"Regular Payment Promo Code": "28127"
	},
	{
		"Form Code": "beMac_Info",
		"Source": "28116",
		"Budgetary Department": 3,
		"Campaign Code": "0",
		"Freehold Code": "NDIR",
		"Sub Region": "NAT",
		"Regular Payment Campaign Code": "",
		"Regular Payment Promo Code": "28116"
	},
	{
		"Form Code": "beMac_Make",
		"Source": "28117",
		"Budgetary Department": 9,
		"Campaign Code": "0",
		"Freehold Code": "NDIR",
		"Sub Region": "NAT",
		"Regular Payment Campaign Code": "",
		"Regular Payment Promo Code": "28117"
	},
	{
		"Form Code": "octoberhelp",
		"Source": "56645",
		"Budgetary Department": 9,
		"Campaign Code": "79L",
		"Freehold Code": "NDIR",
		"Sub Region": "NAT",
		"Regular Payment Campaign Code": "56646",
		"Regular Payment Promo Code": "79L"
	},
	{
		"Form Code": "octobergive",
		"Source": "37409",
		"Budgetary Department": 9,
		"Campaign Code": "82L",
		"Freehold Code": "NDIR",
		"Sub Region": "NAT",
		"Regular Payment Campaign Code": "37410",
		"Regular Payment Promo Code": "82L"
	},
	{
		"Form Code": "octoberhero",
		"Source": "56647",
		"Budgetary Department": 9,
		"Campaign Code": "79L",
		"Freehold Code": "NDIR",
		"Sub Region": "NAT",
		"Regular Payment Campaign Code": "56648",
		"Regular Payment Promo Code": "79L"
	},
	{
		"Form Code": "Christmas2013",
		"Source": "57020",
		"Budgetary Department": 9,
		"Campaign Code": "93R",
		"Freehold Code": "NDIR",
		"Sub Region": "NAT",
		"Regular Payment Campaign Code": "93R",
		"Regular Payment Promo Code": "57021"
	},
	{
		"Form Code": "november",
		"Source": "300335",
		"Budgetary Department": 9,
		"Campaign Code": "31M",
		"Freehold Code": "NDIR",
		"Sub Region": "NAT",
		"Regular Payment Campaign Code": "31M",
		"Regular Payment Promo Code": "300336"
	},
	{
		"Form Code": "novemberhero",
		"Source": "300337",
		"Budgetary Department": 9,
		"Campaign Code": "31M",
		"Freehold Code": "NDIR",
		"Sub Region": "NAT",
		"Regular Payment Campaign Code": "31M",
		"Regular Payment Promo Code": "300338"
	},
	{
		"Form Code": "christmasstar",
		"Source": "327030",
		"Budgetary Department": 9,
		"Campaign Code": "04N",
		"Freehold Code": "NDIR",
		"Sub Region": "NAT",
		"Regular Payment Campaign Code": "04N",
		"Regular Payment Promo Code": "327029"
	},
	{
		"Form Code": "ecardssales",
		"Source": "63082",
		"Budgetary Department": 19,
		"Campaign Code": "TDG",
		"Freehold Code": "NDIR",
		"Sub Region": "NAT",
		"Regular Payment Campaign Code": "TDG",
		"Regular Payment Promo Code": "63082"
	},
	{
		"Form Code": "JanuaryNurse",
		"Source": "61647",
		"Budgetary Department": 9,
		"Campaign Code": "29M",
		"Freehold Code": "NDIR",
		"Sub Region": "NAT",
		"Regular Payment Campaign Code": "29M",
		"Regular Payment Promo Code": "61648"
	},
	{
		"Form Code": "JanuaryGift",
		"Source": "61643",
		"Budgetary Department": 9,
		"Campaign Code": "29M",
		"Freehold Code": "NDIR",
		"Sub Region": "NAT",
		"Regular Payment Campaign Code": "29M",
		"Regular Payment Promo Code": "61644"
	},
	{
		"Form Code": "JanuaryGiftHero",
		"Source": "61645",
		"Budgetary Department": 9,
		"Campaign Code": "29M",
		"Freehold Code": "NDIR",
		"Sub Region": "NAT",
		"Regular Payment Campaign Code": "29M",
		"Regular Payment Promo Code": "61646"
	},
	{
		"Form Code": "FebLister",
		"Source": "28244",
		"Budgetary Department": 9,
		"Campaign Code": "45S",
		"Freehold Code": "NDIR",
		"Sub Region": "NAT",
		"Regular Payment Campaign Code": "",
		"Regular Payment Promo Code": ""
	},
	{
		"Form Code": "CancerServices",
		"Source": "28242",
		"Budgetary Department": 9,
		"Campaign Code": "45S",
		"Freehold Code": "NDIR",
		"Sub Region": "NAT",
		"Regular Payment Campaign Code": "45S",
		"Regular Payment Promo Code": "28243"
	},
	{
		"Form Code": "MarchNurse",
		"Source": "52655",
		"Budgetary Department": 9,
		"Campaign Code": "37M",
		"Freehold Code": "NDIR",
		"Sub Region": "NAT",
		"Regular Payment Campaign Code": "37M",
		"Regular Payment Promo Code": "52656"
	},
	{
		"Form Code": "MarchNurseHero",
		"Source": "52657",
		"Budgetary Department": 9,
		"Campaign Code": "37M",
		"Freehold Code": "NDIR",
		"Sub Region": "NAT",
		"Regular Payment Campaign Code": "37M",
		"Regular Payment Promo Code": "52658"
	},
	{
		"Form Code": "MarchElaine",
		"Source": "65332",
		"Budgetary Department": 9,
		"Campaign Code": "46S",
		"Freehold Code": "NDIR",
		"Sub Region": "NAT",
		"Regular Payment Campaign Code": "46S",
		"Regular Payment Promo Code": "65333"
	},
	{
		"Form Code": "MarchElaineHero",
		"Source": "65299",
		"Budgetary Department": 9,
		"Campaign Code": "46S",
		"Freehold Code": "NDIR",
		"Sub Region": "NAT",
		"Regular Payment Campaign Code": "46S",
		"Regular Payment Promo Code": "63977"
	},
	{
		"Form Code": "MayAware",
		"Source": "67175",
		"Budgetary Department": 9,
		"Campaign Code": "47S",
		"Freehold Code": "NDIR",
		"Sub Region": "NAT",
		"Regular Payment Campaign Code": "47S",
		"Regular Payment Promo Code": "67174"
	},
	{
		"Form Code": "MayAwareHero",
		"Source": "67179",
		"Budgetary Department": 9,
		"Campaign Code": "47S",
		"Freehold Code": "NDIR",
		"Sub Region": "NAT",
		"Regular Payment Campaign Code": "47S",
		"Regular Payment Promo Code": "67178"
	},
	{
		"Form Code": "MayTakeControl",
		"Source": "67177",
		"Budgetary Department": 9,
		"Campaign Code": "47S",
		"Freehold Code": "NDIR",
		"Sub Region": "NAT",
		"Regular Payment Campaign Code": "47S",
		"Regular Payment Promo Code": "67176"
	},
	{
		"Form Code": "JuneHelp",
		"Source": "65409",
		"Budgetary Department": 9,
		"Campaign Code": "38M",
		"Freehold Code": "NDIR",
		"Sub Region": "NAT",
		"Regular Payment Campaign Code": "38M",
		"Regular Payment Promo Code": "65410"
	},
	{
		"Form Code": "JulyCourage",
		"Source": "68357",
		"Budgetary Department": 9,
		"Campaign Code": "48S",
		"Freehold Code": "NDIR",
		"Sub Region": "NAT",
		"Regular Payment Campaign Code": "48S",
		"Regular Payment Promo Code": "68359"
	},
	{
		"Form Code": "JulyInMem",
		"Source": "72773",
		"Budgetary Department": 9,
		"Campaign Code": "64M",
		"Freehold Code": "NDIR",
		"Sub Region": "NAT",
		"Regular Payment Campaign Code": "64M",
		"Regular Payment Promo Code": "72774"
	},
	{
		"Form Code": "AugustNurse",
		"Source": "67880",
		"Budgetary Department": 9,
		"Campaign Code": "70M",
		"Freehold Code": "NDIR",
		"Sub Region": "NAT",
		"Regular Payment Campaign Code": "70M",
		"Regular Payment Promo Code": "67881"
	},
	{
		"Form Code": "wbcm",
		"Source": "415063",
		"Budgetary Department": 4,
		"Campaign Code": "CFM",
		"Freehold Code": "NEVE",
		"Sub Region": "NAT",
		"Regular Payment Campaign Code": "",
		"Regular Payment Promo Code": ""
	},
	{
		"Form Code": "NurseAppeal2014",
		"Source": "309166",
		"Budgetary Department": 9,
		"Campaign Code": "18T",
		"Freehold Code": "NDIR",
		"Sub Region": "NAT",
		"Regular Payment Campaign Code": "18T",
		"Regular Payment Promo Code": "309167"
	}
]



export { financeCodes };