import { deathwatch } from "./module/config.js";
import DeathwatchMarineSheet from "./module/sheets/deathwatch-marine-sheet.js";

Hooks.once("init", function () {
    console.log("deathwatch | Initializing Deathwatch System");

    CONFIG.deathwatch = deathwatch;

    Actors.unregisterSheet("core", ActorSheet);
    Actors.registerSheet("deathwatch", DeathwatchMarineSheet, { types: ["deathwatchMarine"], makeDefault: true });

    preloadHandlebarsTemplates();

});

async function preloadHandlebarsTemplates() {
    const templatePaths = [
        "systems/deathwatch/templates/partials/characteristics-bar.hbs"
    ];

    return loadTemplates(templatePaths);
}