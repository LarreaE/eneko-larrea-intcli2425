import { Potion } from "../types/Potion";

export const filterByLevelRequirement = (potions:Potion[], level:number): Potion[] => {

    const newPotions = [];

    for (let i = 0; i < potions.length; i++) {
        if (potions[i].crafting.required_level <= level) { // si el nivel minimo es menor al nivel pedido
            newPotions.push(potions[i]);
        }
    }
    return newPotions
}