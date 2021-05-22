GameUI.SetDefaultUIEnabled(
    DotaDefaultUIElement_t.DOTA_DEFAULT_UI_ACTION_PANEL,
    true
);
GameUI.SetDefaultUIEnabled(
    DotaDefaultUIElement_t.DOTA_DEFAULT_UI_ACTION_MINIMAP,
    true
);
GameUI.SetDefaultUIEnabled(
    DotaDefaultUIElement_t.DOTA_DEFAULT_UI_INVENTORY_PANEL,
    true
);
GameUI.SetDefaultUIEnabled(
    DotaDefaultUIElement_t.DOTA_DEFAULT_UI_INVENTORY_SHOP,
    true
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

const hudRoot = $.GetContextPanel().GetParent()!.GetParent()!;
hudRoot.FindChildTraverse("quickstats")!.style.visibility = "collapse";
