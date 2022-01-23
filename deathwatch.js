import { deathwatch } from "./module/config.js";
import DeathwatchActor from "./module/deathwatch-actor.js";
import SkillSheet from "./module/sheets/skill-sheet.js";
import TalentSheet from "./module/sheets/talent-sheet.js";
import WeaponSheet from "./module/sheets/weapon-sheet.js";
import GearSheet from "./module/sheets/gear-sheet.js";
import DeathwatchMarineSheet from "./module/sheets/deathwatch-marine-sheet.js";
import HordeSheet from "./module/sheets/horde-sheet.js";
import NpcSheet from "./module/sheets/npc-sheet.js";

Hooks.once("init", function () {
    console.log("deathwatch | Initializing Deathwatch System");

    CONFIG.deathwatch = deathwatch;
    CONFIG.Actor.documentClass = DeathwatchActor;

    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("deathwatch", SkillSheet, { types: ["skill"], makeDefault: true });
    Items.registerSheet("deathwatch", TalentSheet, { types: ["talent"], makeDefault: true });
    Items.registerSheet("deathwatch", WeaponSheet, { types: ["weapon"], makeDefault: true });
    Items.registerSheet("deathwatch", GearSheet, { types: ["gear"], makeDefault: true });

    Actors.unregisterSheet("core", ActorSheet);
    Actors.registerSheet("deathwatch", DeathwatchMarineSheet, { types: ["deathwatchMarine"], makeDefault: true });
    Actors.registerSheet("deathwatch", HordeSheet, { types: ["horde"], makeDefault: true });
    Actors.registerSheet("deathwatch", NpcSheet, { types: ["npc"], makeDefault: true });

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

    Handlebars.registerHelper('camelcase', function (str) {
        return camelize(str);
    });
});

async function preloadHandlebarsTemplates() {
    const templatePaths = [
        "systems/deathwatch/templates/partials/marine-details.hbs",
        "systems/deathwatch/templates/partials/characteristics-bar.hbs",
        "systems/deathwatch/templates/partials/skills-editable.hbs",
        "systems/deathwatch/templates/partials/talents-editable.hbs",
        "systems/deathwatch/templates/partials/gear-editable.hbs",
        "systems/deathwatch/templates/partials/marine-combat-editable.hbs",
        "systems/deathwatch/templates/partials/marine-combat-weapon.hbs",
        "systems/deathwatch/templates/partials/marine-combat-armour.hbs",
        "systems/deathwatch/templates/partials/marine-combat-wounds.hbs",
        "systems/deathwatch/templates/partials/marine-combat-movement.hbs",
        "systems/deathwatch/templates/partials/npc-characteristics-bar.hbs",
        "systems/deathwatch/templates/partials/npc-combat.hbs",
        "systems/deathwatch/templates/partials/npc-combat-armour.hbs",
        "systems/deathwatch/templates/partials/horde-combat-editable.hbs",
        "systems/deathwatch/templates/partials/horde-combat-armour.hbs",
        "systems/deathwatch/templates/partials/horde-combat-magnitude.hbs"
    ];

    return loadTemplates(templatePaths);
}

function camelize(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
        return index === 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, '');
}