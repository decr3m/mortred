class ExampleUI {
    // Instance variables
    panel: Panel;

    // ExampleUI constructor
    constructor(panel: Panel) {
        this.panel = panel;

        // Find container element
        const container = this.panel.FindChild("HeroPortraits")!;

        // Create portrait for player 0, 1 and 2
        const portrait0 = new PlayerPortrait(
            container,
            "npc_dota_hero_juggernaut",
            "Player11"
        );
        const portrait1 = new PlayerPortrait(
            container,
            "npc_dota_hero_omniknight",
            "Player1"
        );
        const portrait2 = new PlayerPortrait(
            container,
            "npc_dota_hero_invoker",
            "Player2"
        );

        // Set HP of player 1 and 2 to a different value
        portrait0.SetHealthPercent(80);
        portrait2.SetHealthPercent(20);
    }
}

let ui = new ExampleUI($.GetContextPanel());
