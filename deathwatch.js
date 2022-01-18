import { deathwatch } from "./module/config.js";
import DeathwatchActor from "./module/deathwatch-actor.js";
import SkillSheet from "./module/sheets/skill-sheet.js";
import DeathwatchMarineSheet from "./module/sheets/deathwatch-marine-sheet.js";

Hooks.once("init", function () {
    console.log("deathwatch | Initializing Deathwatch System");

    CONFIG.deathwatch = deathwatch;
    CONFIG.Actor.documentClass = DeathwatchActor;

    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("deathwatch", SkillSheet, { types: ["skill"], makeDefault: true });

    Actors.unregisterSheet("core", ActorSheet);
    Actors.registerSheet("deathwatch", DeathwatchMarineSheet, { types: ["deathwatchMarine"], makeDefault: true });

    preloadHandlebarsTemplates();

    Handlebars.registerHelper('ifeq', function (a, b, options) {
        if (a == b) { return options.fn(this); }
        return options.inverse(this);
    });

    Handlebars.registerHelper('concat', function () {
        var arg = Array.prototype.slice.call(arguments, 0);
        arg.pop();
        return arg.join('');
    });
});

async function preloadHandlebarsTemplates() {
    const templatePaths = [
        "systems/deathwatch/templates/partials/marine-details.hbs",
        "systems/deathwatch/templates/partials/characteristics-bar.hbs",
        "systems/deathwatch/templates/partials/marine-skills-editable.hbs"
    ];

    return loadTemplates(templatePaths);
}