import App from "./App";

function initUI() {
    ReactPanorama.render(React.createElement(App), $.GetContextPanel());
    $.Msg("Loaded!");
    $.Msg(Object.keys(ReactPanorama));
}

// // // ReactPanorama.render(React.createElement(App), $.GetContextPanel());
// // $("#center").SetPanelEvent("onmouseover", initUI);

initUI();

// GameEvents.Subscribe("gameui_activated", (event) => {
//     $.Msg("UI ACTVED! gameui_activated");
// });

// GameEvents.Subscribe("player_spawn", (event) => {
//     $.Msg("UI ACTVED! player_spawn");
// });

// GameEvents.Subscribe("npc_spawned", (event) => {
//     $.Msg("UI ACTVED! npc_spawned");
// });

// GameEvents.Subscribe("dota_on_hero_finish_spawn", (event) => {
//     $.Msg("UI ACTVED! dota_on_hero_finish_spawn");
//     initUI();
//     $.Msg("UI ACTVED! ui initialized");
// });

// GameEvents.Subscribe("dota_player_spawned", (event) => {
//     $.Msg("UI ACTVED! dota_player_spawned");
// });

// GameEvents.Subscribe("dota_game_state_change", (event) => {
//     $.Msg("CHANGE EVENT");
//     $.Msg(event.new_state);
//     switch (event.new_state) {
//         case DOTA_GameState.DOTA_GAMERULES_STATE_STRATEGY_TIME:
//             // initUI();
//             break;
//     }
// });

$.Msg("Hud panorama loaded");

GameEvents.Subscribe("my_custom_event", (event) => {
    $.Msg("Received custom event", event);
});

GameEvents.SendCustomGameEventToServer<{}>("ui_loaded", {});
