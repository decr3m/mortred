/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/*!*********************!*\
  !*** ./manifest.js ***!
  \*********************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
eval("GameUI.SetDefaultUIEnabled(\r\n    DotaDefaultUIElement_t.DOTA_DEFAULT_UI_ACTION_PANEL,\r\n    true\r\n);\r\nGameUI.SetDefaultUIEnabled(\r\n    DotaDefaultUIElement_t.DOTA_DEFAULT_UI_ACTION_MINIMAP,\r\n    true\r\n);\r\nGameUI.SetDefaultUIEnabled(\r\n    DotaDefaultUIElement_t.DOTA_DEFAULT_UI_INVENTORY_PANEL,\r\n    true\r\n);\r\nGameUI.SetDefaultUIEnabled(\r\n    DotaDefaultUIElement_t.DOTA_DEFAULT_UI_INVENTORY_SHOP,\r\n    true\r\n);\r\nGameUI.SetDefaultUIEnabled(\r\n    DotaDefaultUIElement_t.DOTA_DEFAULT_UI_FLYOUT_SCOREBOARD,\r\n    false\r\n);\r\nGameUI.SetDefaultUIEnabled(\r\n    DotaDefaultUIElement_t.DOTA_DEFAULT_UI_TOP_BAR_BACKGROUND,\r\n    false\r\n);\r\nGameUI.SetDefaultUIEnabled(\r\n    DotaDefaultUIElement_t.DOTA_DEFAULT_UI_TOP_HEROES,\r\n    false\r\n);\r\n\r\nconst hudRoot = $.GetContextPanel().GetParent().GetParent();\r\nhudRoot.FindChildTraverse(\"quickstats\").style.visibility = \"collapse\";\r\n\n\n//# sourceURL=webpack:///./manifest.js?");
/******/ })()
;