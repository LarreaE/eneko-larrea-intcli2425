
import {filterByLevelRequirement} from '../helpers/potionHelpers.ts'
import {potions, expectedPotionsForLevelRequirement} from '../__mocks__/data.ts'

describe('Check if filterByLevelRequirement works as intended', () => {
	it('should return two potions, one with minimum level 22 and another 20', () => {
        //arrange
        const allPotions = potions
        const expectedPotions = expectedPotionsForLevelRequirement 
        //act
        const result = filterByLevelRequirement(allPotions,22);        
        //assert
		expect(result).toStrictEqual(expectedPotions);
	})
})