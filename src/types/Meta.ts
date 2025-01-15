export interface Meta {
    created_by: string,
    lore: string,
    availability: {
        in_shops: boolean,
        quest_reward: boolean,
        drop_rate: {
            boss: string,
            chance: string,
        } 
    }
}