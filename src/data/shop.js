import { MAX_LEVEL } from "@/data/experience";
import { COMBAT_UPGRADES, JOB_UPGRADES } from "@/data/upgrades";

export const SECTIONS = [
	{
		name: "MegaSeed Servitor",
		purchases: ['seed10', 'seed100', 'seed500', 'seed2000', 'seed5000']
	},
	{
		name: "Job Unlocks",
		purchases: [
			"unlockCooking", "unlockXenobiology", "unlockShitposting"
		]
	},
	{
		name: "Job Upgrades",
		purchases: Object.keys(JOB_UPGRADES)
	},
	{
		name: "Combat Upgrades",
		purchases: Object.keys(COMBAT_UPGRADES)
	},
	{
		name: "Gamble-O-Tron",
		purchases: ["hatCrate",	"knifeCrate", "lavaCrate", "supplyCrate", "syndieCrate"]
	},
	{
		name: "Clothes Vendo-matic",
		purchases: ["capeMining", "capeEngineering", "capeFabrication", "capeGraytiding", "capeBotany", "capeXenobiology"]
	}
]

const SEEDS = {
	seed10: {
		name: "Plant seeds x10",
		description: "For all your botany needs.",
		icon: require('@/assets/art/botany/seed.png'),
		items: {
			id: "plantSeed",
			count: 10
		},
		requiredItems: {
			money: 10 * 50
		}
	},
	seed100: {
		name: "Plant seeds x100",
		description: "For all your botany needs. 5% discount!",
		icon: require('@/assets/art/botany/seed.png'),
		items: {
			id: "plantSeed",
			count: 100
		},
		requiredItems: {
			money: Math.round(100 * 50 * .95)
		}
	},
	seed500: {
		name: "Plant seeds x500",
		description: "For all your botany needs. 10% discount!",
		icon: require('@/assets/art/botany/seed.png'),
		items: {
			id: "plantSeed",
			count: 500
		},
		requiredItems: {
			money: Math.round(500 * 50 * .90)
		}
	},
	seed2000: {
		name: "Plant seeds x2,000",
		description: "For all your botany needs. 15% discount!",
		icon: require('@/assets/art/botany/seed.png'),
		items: {
			id: "plantSeed",
			count: 2000
		},
		requiredItems: {
			money: Math.round(2000 * 50 * .85)
		}
	},
	seed5000: {
		name: "Plant seeds x5,000",
		description: "For all your botany needs. 20% discount!",
		icon: require('@/assets/art/botany/seed.png'),
		items: {
			id: "plantSeed",
			count: 5000
		},
		requiredItems: {
			money: Math.round(5000 * 50 * .8)
		}
	}
}

const JOB_UNLOCKS = {
	unlockCooking: {
		name: "Unlock Cooking",
		description: "Allows you to turn meat and produce into quality foods",
		icon: require('@/assets/art/cooking/icon.png'),
		requiredItems: {
			money: 10000
		},
		upgrade: "cookingUnlocked",
		requiredUpgrades: {
			cookingUnlocked: 0
		}
	},
	unlockXenobiology: {
		name: "Unlock Xenobiology",
		description: "Allows you to raise slimes that can fight alongside you",
		icon: require('@/assets/art/xenobio/icon.gif'),
		requiredItems: {
			money: 25000
		},
		upgrade: "xenobiologyUnlocked",
		requiredUpgrades: {
			xenobiologyUnlocked: 0
		}
	},
	unlockShitposting: {
		name: "Unlock ???",
		description: "???",
		icon: require('@/assets/art/sidebar/mystery.png'),
		requiredItems: {
			money: 9999999
		},
		upgrade: "shitpostingUnlocked",
		requiredUpgrades: {
			shitpostingUnlocked: 0
		}
	}
}

const CAPES = {
	capeMining: {
		item: "capeMining",
		description: "Requires max fabrication to wear.",
		requiredLevels: {
			mining: MAX_LEVEL
		},
		requiredItems: {
			money: 1000000
		}
	},
	capeEngineering: {
		item: "capeEngineering",
		description: "Requires max engineering to wear.",
		requiredLevels: {
			engineering: MAX_LEVEL
		},
		requiredItems: {
			money: 1000000
		}
	},
	capeFabrication: {
		item: "capeFabrication",
		description: "Requires max mining to wear.",
		requiredLevels: {
			fabrication: MAX_LEVEL
		},
		requiredItems: {
			money: 1000000
		}
	},
	capeGraytiding: {
		item: "capeGraytiding",
		description: "Requires max Graytiding to wear.",
		requiredLevels: {
			graytiding: MAX_LEVEL
		},
		requiredItems: {
			money: 1000000
		}
	},
	capeBotany: {
		item: "capeBotany",
		description: "Requires max botany to wear.",
		requiredLevels: {
			botany: MAX_LEVEL
		},
		requiredItems: {
			money: 1000000
		}
	},
	capeXenobiology: {
		item: "capeXenobiology",
		description: "Requires max xenobiology to wear.",
		requiredLevels: {
			xenobiology: MAX_LEVEL
		},
		requiredItems: {
			money: 1000000
		}
	}
}

const CRATES = {
	hatCrate: {
		item: "hatCrate",
		description: "No Key Required. Hats can not be refunded for scrap. Collect all 7!",
		requiredItems: {
			money: 10000
		}
	},
	knifeCrate: {
		item: "knifeCrate",
		description: "Running with knives might not always make you faster, but you'll look cool and edgy.",
		requiredItems: {
			money: 1000
		}
	},
	lavaCrate: {
		item: "lavaCrate",
		description: "Handcrafted materials and relics aquired from the local planetary natives. ",
		requiredItems: {
			exoticparts: 20
		}
	},
	supplyCrate: {
		item: "supplyCrate",
		description: "Nanotrasen can get send the supplies YOU need directly to your location with this state of the art drop pod.",
		requiredItems: {
			money: 20000
		}
	},
	syndieCrate: {
		item: "syndieCrate",
		description: "Syndicate forces have hijacked the droppod system to help you be the murder you always knew you could be.",
		requiredItems: {
			telecrystal: 20,
		}
	},
}


export const PURCHASES = {
	...SEEDS,
	...CAPES,
	...JOB_UNLOCKS,
	...COMBAT_UPGRADES,
	...JOB_UPGRADES,
	...CRATES

}