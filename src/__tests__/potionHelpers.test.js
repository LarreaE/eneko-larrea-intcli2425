
import {filterByLevelRequirement, getPotionsByRarity} from '../helpers/potionHelpers.ts'
import {potions, expectedPotionsForLevelRequirement, expectedPotionsForRaritySort} from '../__mocks__/data.ts'

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