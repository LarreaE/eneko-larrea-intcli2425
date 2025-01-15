export interface Usage {
    instructions: string[],
    restrictions: {
        levelRequirement: number,
        classRestrictions: string[],
        warnings: string[],
    }
}