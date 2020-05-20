export const ITEMS = {
	slimeGrey: {
		name: "Grey Slime Core",
		sellPrice: 3,
		icon: require("@/assets/art/xenobio/SlimeGrey.gif")
	},
	slimeOrange: {
		name: "Orange Slime Core",
		sellPrice: 10,
		icon: require("@/assets/art/xenobio/SlimeOrange.gif")
	},
	slimePurple: {
		name: "Purple Slime Core",
		sellPrice: 10,
		icon: require("@/assets/art/xenobio/SlimePurple.gif")
	},
	slimeBlue: {
		name: "Blue Slime Core",
		sellPrice: 10,
		icon: require("@/assets/art/xenobio/SlimeBlue.gif")
	},
	slimeMetal: {
		name: "Metal Slime Core",
		sellPrice: 10,
		icon: require("@/assets/art/xenobio/SlimeMetal.gif")
	},
	slimeYellow: {
		name: "Yellow Slime Core",
		sellPrice: 25,
		icon: require("@/assets/art/xenobio/SlimeYellow.gif")
	},
	slimeDarkPurple: {
		name: "Dark Purple Slime Core",
		sellPrice: 25,
		icon: require("@/assets/art/xenobio/SlimeDarkPurple.gif")
	},
	slimeDarkBlue: {
		name: "Dark Blue Slime Core",
		sellPrice: 25,
		icon: require("@/assets/art/xenobio/SlimeDarkBlue.gif")
	},
	slimeSilver: {
		name: "Silver Slime Core",
		sellPrice: 25,
		icon: require("@/assets/art/xenobio/SlimeSilver.gif")
	},
	slimeBluespace: {
		name: "Bluespace Slime Core",
		sellPrice: 40,
		icon: require("@/assets/art/xenobio/SlimeBluespace.gif")
	},
	slimeSepia: {
		name: "Sepia Slime Core",
		sellPrice: 40,
		icon: require("@/assets/art/xenobio/SlimeSepia.gif")
	},
	slimeCerulean: {
		name: "Cerulean Slime Core",
		sellPrice: 40,
		icon: require("@/assets/art/xenobio/SlimeCerulean.gif")
	},
	slimePyrite: {
		name: "Pyrite Slime Core",
		sellPrice: 40,
		icon: require("@/assets/art/xenobio/SlimePyrite.gif")
	},
	slimeRed: {
		name: "Red Slime Core",
		sellPrice: 60,
		icon: require("@/assets/art/xenobio/SlimeRed.gif")
	},
	slimeGreen: {
		name: "Green Slime Core",
		sellPrice: 60,
		icon: require("@/assets/art/xenobio/SlimeGreen.gif")
	},
	slimePink: {
		name: "Pink Slime Core",
		sellPrice: 60,
		icon: require("@/assets/art/xenobio/SlimePink.gif")
	},
	slimeGold: {
		name: "Gold Slime Core",
		sellPrice: 60,
		icon: require("@/assets/art/xenobio/SlimeGold.gif")
	},
	slimeOil: {
		name: "Oil Slime Core",
		sellPrice: 100,
		icon: require("@/assets/art/xenobio/SlimeOil.gif")
	},
	slimeBlack: {
		name: "Black Slime Core",
		sellPrice: 100,
		icon: require("@/assets/art/xenobio/SlimeBlack.gif")
	},
	slimeLightPink: {
		name: "Light Pink Slime Core",
		sellPrice: 100,
		icon: require("@/assets/art/xenobio/SlimeLightPink.gif")
	},
	slimeAddy: {
		name: "Adamantite Slime Core",
		sellPrice: 100,
		icon: require("@/assets/art/xenobio/SlimeAddy.gif")
	},
	slimeRainbow: {
		name: "Rainbow Slime Core",
		sellPrice: 500,
		icon: require("@/assets/art/xenobio/SlimeRainbow.gif")
	},
};

export const ACTIONS = {
	splitGrey: {
		time: 5,
		item: "slimeGrey",
		icon: require("@/assets/art/xenobio/SlimeGrey.gif"),
		xp: 5,
		requiredLevel: 1
	},
	splitOrange: {
		time: 5,
		item: "slimeOrange",
		icon: require("@/assets/art/xenobio/SlimeOrange.gif"),
		xp: 5,
		requiredLevel: 4,
		requiredItems: {
			slimeGrey: 1
		}
	},
	splitPurple: {
		time: 5,
		item: "slimePurple",
		icon: require("@/assets/art/xenobio/SlimePurple.gif"),
		xp: 5,
		requiredLevel: 5,
		requiredItems: {
			slimeGrey: 1
		}
	},
	splitBlue: {
		time: 5,
		item: "slimeBlue",
		icon: require("@/assets/art/xenobio/SlimeBlue.gif"),
		xp: 5,
		requiredLevel: 6,
		requiredItems: {
			slimeGrey: 1
		}
	},
	splitMetal: {
		time: 5,
		item: "slimeMetal",
		icon: require("@/assets/art/xenobio/SlimeMetal.gif"),
		xp: 5,
		requiredLevel: 7,
		requiredItems: {
			slimeGrey: 1
		}
	},
	splitYellow: {
		time: 5,
		item: "slimeYellow",
		icon: require("@/assets/art/xenobio/SlimeYellow.gif"),
		xp: 10,
		requiredLevel: 14,
		requiredItems: {
			slimeOrange: 1
		}
	},
	splitDarkPurple: {
		time: 5,
		item: "slimeDarkPurple",
		icon: require("@/assets/art/xenobio/SlimeDarkPurple.gif"),
		xp: 10,
		requiredLevel: 15,
		requiredItems: {
			slimePurple: 1
		}
	},
	splitDarkBlue: {
		time: 5,
		item: "slimeDarkBlue",
		icon: require("@/assets/art/xenobio/SlimeDarkBlue.gif"),
		xp: 10,
		requiredLevel: 16,
		requiredItems: {
			slimeBlue: 1
		}
	},
	splitSilver: {
		time: 5,
		item: "slimeSilver",
		icon: require("@/assets/art/xenobio/SlimeSilver.gif"),
		xp: 10,
		requiredLevel: 17,
		requiredItems: {
			slimeMetal: 1
		}
	},
	splitBluespace: {
		time: 5,
		item: "slimeBluespace",
		icon: require("@/assets/art/xenobio/SlimeBluespace.gif"),
		xp: 15,
		requiredLevel: 24,
		requiredItems: {
			slimeYellow: 1
		}
	},
	splitSepia: {
		time: 5,
		item: "slimeSepia",
		icon: require("@/assets/art/xenobio/SlimeSepia.gif"),
		xp: 15,
		requiredLevel: 25,
		requiredItems: {
			slimeDarkPurple: 1
		}
	},
	splitCerulean: {
		time: 5,
		item: "slimeCerulean",
		icon: require("@/assets/art/xenobio/SlimeCerulean.gif"),
		xp: 15,
		requiredLevel: 26,
		requiredItems: {
			slimeDarkBlue: 1
		}
	},
	splitPyrite: {
		time: 5,
		item: "slimePyrite",
		icon: require("@/assets/art/xenobio/SlimePyrite.gif"),
		xp: 15,
		requiredLevel: 27,
		requiredItems: {
			slimeSilver: 1
		}
	},
	splitRed: {
		time: 5,
		item: "slimeRed",
		icon: require("@/assets/art/xenobio/SlimeRed.gif"),
		xp: 20,
		requiredLevel: 34,
		requiredItems: {
			slimeBluespace: 1
		}
	},
	splitGreen: {
		time: 5,
		item: "slimeGreen",
		icon: require("@/assets/art/xenobio/SlimeGreen.gif"),
		xp: 20,
		requiredLevel: 35,
		requiredItems: {
			slimeSepia: 1
		}
	},
	splitPink: {
		time: 5,
		item: "slimePink",
		icon: require("@/assets/art/xenobio/SlimePink.gif"),
		xp: 20,
		requiredLevel: 36,
		requiredItems: {
			slimeCerulean: 1
		}
	},
	splitGold: {
		time: 5,
		item: "slimeGold",
		icon: require("@/assets/art/xenobio/SlimeGold.gif"),
		xp: 20,
		requiredLevel: 37,
		requiredItems: {
			slimePyrite: 1
		}
	},
	splitGrey40: {
		time: 1,
		item: "slimeGrey",
		icon: require("@/assets/art/xenobio/SlimeGrey.gif"),
		xp: -5,
		requiredLevel: 40
	},
	splitOil: {
		time: 5,
		item: "slimeOil",
		icon: require("@/assets/art/xenobio/SlimeOil.gif"),
		xp: 25,
		requiredLevel: 44,
		requiredItems: {
			slimeRed: 1
		}
	},
	splitBlack: {
		time: 5,
		item: "slimeBlack",
		icon: require("@/assets/art/xenobio/SlimeBlack.gif"),
		xp: 25,
		requiredLevel: 45,
		requiredItems: {
			slimeGreen: 1
		}
	},
	splitLightPink: {
		time: 5,
		item: "slimeLightPink",
		icon: require("@/assets/art/xenobio/SlimeLightPink.gif"),
		xp: 25,
		requiredLevel: 46,
		requiredItems: {
			slimePink: 1
		}
	},
	splitAddy: {
		time: 5,
		item: "slimeGrey",
		icon: require("@/assets/art/xenobio/SlimeAddy.gif"),
		xp: 25,
		requiredLevel: 47,
		requiredItems: {
			slimeGold: 1
		}
	},
	splitRainbow: {
		time: 5,
		item: "slimeRainbow",
		icon: require("@/assets/art/xenobio/SlimeRainbow.gif"),
		xp: -200,
		requiredLevel: 50,
		requiredItems: {
			slimeGrey: 1,
			slimeOrange: 1,
			slimePurple: 1,
			slimeBlue: 1,
			slimeMetal: 1,
			slimeYellow: 1,
			slimeDarkPurple: 1,
			slimeDarkBlue: 1,
			slimeSilver: 1,
			SlimeBluespace: 1,
			slimeSepia: 1,
			slimeCerulean: 1,
			slimePyrite: 1,
			slimeRed: 1,
			slimeGreen: 1,
			slimePink: 1,
			slimeGold: 1,
			slimeOil: 1,
			slimeBlack: 1,
			slimeLightPink: 1,
			slimeAddy: 1,
		}
	},
}

export const JOB = {
	id: "xenobiology",
	name: "Xenobiology",
	icon: require("@/assets/art/xenobio/icon.gif"),
	color: "#95857a",
	items: ITEMS
}