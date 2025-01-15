import { Crafting } from "./Crafting";
import { Effects } from "./Effects";
import { Ingredient } from "./Ingredient";
import { Meta } from "./Meta";
import { Usage } from "./Usage";

export interface Potion {
	id: string,
	name: string,
    type: string,
	rarity: string,
	effects: Effects,
	ingredients: Ingredient[],
	crafting: Crafting,
	usage: Usage,
	meta: Meta,
	image: string
}
