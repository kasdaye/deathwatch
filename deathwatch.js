import { deathwatch } from "./module/config.js";
import DeathwatchActor from "./module/deathwatch-actor.js";
import SkillSheet from "./module/sheets/skill-sheet.js";
import TalentSheet from "./module/sheets/talent-sheet.js";
import WeaponSheet from "./module/sheets/weapon-sheet.js";
import DeathwatchMarineSheet from "./module/sheets/deathwatch-marine-sheet.js";

Hooks.once("init", function () {
    console.log("deathwatch | Initializing Deathwatch System");

    CONFIG.deathwatch = deathwatch;
    CONFIG.Actor.documentClass = DeathwatchActor;

    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("deathwatch", SkillSheet, { types: ["skill"], makeDefault: true });
    Items.registerSheet("deathwatch", TalentSheet, { types: ["talent"], makeDefault: true });
    Items.registerSheet("deathwatch", WeaponSheet, { types: ["weapon"], makeDefault: true });

    Actors.unregisterSheet("core", ActorSheet);
    Actors.registerSheet("deathwatch", DeathwatchMarineSheet, { types: ["deathwatchMarine"], makeDefault: true });

    preloadHandlebarsTemplates();

    Handlebars.registerHelper('ifeq', function (a, b, options) {
        if (a == b) { return options.fn(this); }
        return options.inverse(this);
    });

    Handlebars.registerHelper('ifneq', function (a, b, options) {
        if (a !== b) { return options.fn(this); }
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
        "systems/deathwatch/templates/partials/marine-skills-editable.hbs",
        "systems/deathwatch/templates/partials/marine-talents-editable.hbs",
        "systems/deathwatch/templates/partials/marine-combat-editable.hbs",
        "systems/deathwatch/templates/partials/marine-combat-weapon.hbs",
        "systems/deathwatch/templates/partials/marine-combat-armour.hbs",
        "systems/deathwatch/templates/partials/marine-combat-wounds.hbs"
    ];

    return loadTemplates(templatePaths);
}