import { Potion } from "../types/Potion";

export const filterByLevelRequirement = (
  potions: Potion[],
  level: number
): Potion[] => {
  const newPotions = [];

  for (let i = 0; i < potions.length; i++) {
    if (potions[i].crafting.required_level <= level) {
      // si el nivel minimo es menor al nivel pedido
      newPotions.push(potions[i]);
    }
  }
  return newPotions;
};

export const getPotionsByRarity = (
  potions: Potion[],
  rarity: string
): Potion[] => {
  const newPotions = [];
  for (let i = 0; i < potions.length; i++) {
    if (potions[i].rarity === rarity) {
      // si la rareza es igual
      newPotions.push(potions[i]);
    }
  }
  return newPotions;
};

export const listIngredients = (potion: Potion): string[] => {
  const ingredients = potion.ingredients;
  const names = [];
  for (let index = 0; index < ingredients.length; index++) {
    names.push(ingredients[index].name);
  }
  return names;
};
