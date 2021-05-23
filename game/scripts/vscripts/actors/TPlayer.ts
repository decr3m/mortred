export default class TPlayer {
    playerId: PlayerID;
    hero: CDOTA_BaseNPC_Hero;
    constructor(playerId: PlayerID, hero: CDOTA_BaseNPC_Hero) {
        this.hero = hero;
        this.playerId = playerId;
        print(playerId);
        if (this.hero) {
            print(this.hero.GetName());
            // myPlayerHero.AddAbility(abilities["5461"]);
            // myPlayerHero.RemoveAbility("ursa_earthshock");
            for (let index = 0; index < hero.GetAbilityCount(); index++) {
                const ability = this.hero.GetAbilityByIndex(index);
                if (!ability) continue;
                if (
                    [
                        ABILITY_TYPES.ABILITY_TYPE_ATTRIBUTES,
                        ABILITY_TYPES.ABILITY_TYPE_HIDDEN,
                    ].includes(ability.GetAbilityType()) ||
                    ability.GetAbilityName() === "special_bonus_attributes"
                )
                    continue;
                this.hero.RemoveAbility(ability.GetAbilityName());
            }
        }
    }
}
