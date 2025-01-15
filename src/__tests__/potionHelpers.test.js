
import {calculateCraftingTime, filterByLevelRequirement, findPotionByEffect, getPotionsByRarity, listIngredients} from '../helpers/potionHelpers.ts'
import {potions, expectedPotionsForLevelRequirement, expectedPotionsForRaritySort, expectedIngredientsNames, expectedEffectPotions, differentTimeUnitPotions} from '../__mocks__/data.ts'

describe('Check if filterByLevelRequirement works as intended', () => {
	it('should return two potions, one with minimum level 22 and another 20', () => {
        //arrange
        const allPotions = potions
        const expectedPotions = expectedPotionsForLevelRequirement //esperamos que el resultado sea el mock que ya esta preparado con todas las pociones con nivel igual o por debajo de 22
        //act
        const result = filterByLevelRequirement(allPotions,22);        
        //assert
		expect(result).toStrictEqual(expectedPotions);
	})
})

describe('Check if getPotionsByRarity works as intended', () => {
	it('should return all mythic potions', () => {
        //arrange
        const allPotions = potions
        const expectedPotions = expectedPotionsForRaritySort    //esperamos que el resultado sea el mock que ya esta preparado con todas las pociones mythic
        //act
        const result = getPotionsByRarity(allPotions,"mythic");        
        //assert
		expect(result).toStrictEqual(expectedPotions);
	})
})

describe('Check if listIngredients works as intended', () => {
	it('should return the names of the ingredients for Elixir of Eternal Flame', () => {
        //arrange
        const eternalFlame = potions[0]
        const expectedNames = expectedIngredientsNames    //esperamos que el resultado sea el mock que ya esta preparado con todos los nombres de ingredientes de la primera pocion mythic
        //act
        const result = listIngredients(eternalFlame);        
        //assert
		expect(result).toStrictEqual(expectedNames);
	})
})

describe('Check if findPotionByEffect works as intended', () => {
	it('should return the potions that have one of the secondary effect manaRegeneration', () => {
        //arrange
        const allPotions = potions
        const expectedPotions = expectedEffectPotions    //esperamos que el resultado sea el mock que ya esta preparado con todas las pociones con effecto secundario manaRegeneration
        //act
        const result = findPotionByEffect(allPotions,'manaRegeneration');        
        //assert
		expect(result).toStrictEqual(expectedPotions);
	})
})

describe('Check if calculateCraftingTime works as intended', () => {
	it('should return the total amount of minutes that require the prepared potions array mock', () => {
        //arrange
        const allPotions = differentTimeUnitPotions
        const expectedTime = 345    //5 horas + 45 minutos => 5*60+45 = 345 esperamos que el resultado sea la suma de las dos pociones ( no hay ninguna que tarde segundos)
        //act
        const result = calculateCraftingTime(allPotions);        
        //assert
		expect(result).toBe(expectedTime);
	})
})