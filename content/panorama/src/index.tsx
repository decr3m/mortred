import App from "./App";

GameUI.SetDefaultUIEnabled(
    DotaDefaultUIElement_t.DOTA_DEFAULT_UI_ACTION_PANEL,
    false
);
GameUI.SetDefaultUIEnabled(
    DotaDefaultUIElement_t.DOTA_DEFAULT_UI_ACTION_MINIMAP,
    false
);
GameUI.SetDefaultUIEnabled(
    DotaDefaultUIElement_t.DOTA_DEFAULT_UI_INVENTORY_PANEL,
    false
);
GameUI.SetDefaultUIEnabled(
    DotaDefaultUIElement_t.DOTA_DEFAULT_UI_INVENTORY_SHOP,
    false
);
GameUI.SetDefaultUIEnabled(
    DotaDefaultUIElement_t.DOTA_DEFAULT_UI_FLYOUT_SCOREBOARD,
    false
);
GameUI.SetDefaultUIEnabled(
    DotaDefaultUIElement_t.DOTA_DEFAULT_UI_TOP_BAR_BACKGROUND,
    false
);
GameUI.SetDefaultUIEnabled(
    DotaDefaultUIElement_t.DOTA_DEFAULT_UI_TOP_HEROES,
    false
);

ReactPanorama.render(React.createElement(App), $.GetContextPanel());
$.Msg(Object.keys(ReactPanorama));
