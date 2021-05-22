import { reloadable } from "./lib/tstl-utils";
import "./modifiers/modifier_panic";

const heroSelectionTime = 10;

declare global {
    interface CDOTAGamerules {
        Addon: GameMode;
    }
}

@reloadable
export class GameMode {
    public static Precache(this: void, context: CScriptPrecacheContext) {
        PrecacheResource(
            "particle",
            "particles/units/heroes/hero_meepo/meepo_earthbind_projectile_fx.vpcf",
            context
        );
        PrecacheResource(
            "soundfile",
            "soundevents/game_sounds_heroes/game_sounds_meepo.vsndevts",
            context
        );
    }

    public static Activate(this: void) {
        GameRules.Addon = new GameMode();
    }

    constructor() {
        this.configure();
        ListenToGameEvent(
            "game_rules_state_change",
            () => this.OnStateChange(),
            undefined
        );
        ListenToGameEvent(
            "npc_spawned",
            (event) => this.OnNpcSpawned(event),
            undefined
        );
    }

    private configure(): void {
        GameRules.SetCustomGameTeamMaxPlayers(DOTATeam_t.DOTA_TEAM_GOODGUYS, 5);
        GameRules.SetCustomGameTeamMaxPlayers(DOTATeam_t.DOTA_TEAM_BADGUYS, 0);

        GameRules.SetCustomGameSetupAutoLaunchDelay(300);
        GameRules.SetShowcaseTime(0);
        GameRules.SetStrategyTime(0);
        GameRules.SetHeroSelectionTime(heroSelectionTime);
    }

    public OnStateChange(): void {
        const state = GameRules.State_Get();

        // Add 4 bots to lobby in tools
        // if (
        //     IsInToolsMode() &&
        //     state == DOTA_GameState.DOTA_GAMERULES_STATE_CUSTOM_GAME_SETUP
        // ) {
        //     for (let i = 0; i < 4; i++) {
        //         Tutorial.AddBot("npc_dota_hero_lina", "", "", false);
        //     }
        // }

        switch (state) {
            case DOTA_GameState.DOTA_GAMERULES_STATE_INIT:
                // GameRules.SetCustomGameSetupRemainingTime(999);
                // GameRules.SetCustomGameSetupTimeout(-1);
                break;
            case DOTA_GameState.DOTA_GAMERULES_STATE_WAIT_FOR_PLAYERS_TO_LOAD:
                break;
            case DOTA_GameState.DOTA_GAMERULES_STATE_CUSTOM_GAME_SETUP:
                break;
            case DOTA_GameState.DOTA_GAMERULES_STATE_HERO_SELECTION:
                break;
            case DOTA_GameState.DOTA_GAMERULES_STATE_STRATEGY_TIME:
                break;
            case DOTA_GameState.DOTA_GAMERULES_STATE_TEAM_SHOWCASE:
                break;
            case DOTA_GameState.DOTA_GAMERULES_STATE_WAIT_FOR_MAP_TO_LOAD:
                break;
            case DOTA_GameState.DOTA_GAMERULES_STATE_PRE_GAME:
                Timers.CreateTimer(0.2, () => this.StartGame());
                break;
            case DOTA_GameState.DOTA_GAMERULES_STATE_GAME_IN_PROGRESS:
                break;
            case DOTA_GameState.DOTA_GAMERULES_STATE_POST_GAME:
                break;
            case DOTA_GameState.DOTA_GAMERULES_STATE_DISCONNECT:
                break;
        }
    }

    private StartGame(): void {
        print("Game starting!");
        // Do some stuff here
    }

    // Called on script_reload
    public Reload() {
        print("Script reloaffded!!!");
        // CreateHTTPRequest("GET", "http://localhost:3006/").Send((response) => {
        //     print("response:", response.Body);
        // });
        // Do some stuff here
    }

    private OnNpcSpawned(event: NpcSpawnedEvent) {
        // After a hero unit spawns, apply modifier_panic for 8 seconds
        // const unit = EntIndexToHScript(event.entindex) as CDOTA_BaseNPC; // Cast to npc since this is the 'npc_spawned' event
        // if (unit.IsRealHero()) {
        //     Timers.CreateTimer(1, () => {
        //         unit.AddNewModifier(unit, undefined, "modifier_panic", {
        //             duration: 8,
        //         });
        //     });
        //     if (!unit.HasAbility("meepo_earthbind_ts_example")) {
        //         // Add lua ability to the unit
        //         unit.AddAbility("meepo_earthbind_ts_example");
        //     }
        // }
    }
}
