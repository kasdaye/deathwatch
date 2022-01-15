export default class SkillSheet extends ItemSheet {
    get template() {
        return `systems/deathwatch/templates/sheets/skill-sheet.html`;
    }

    getData() {
        const data = super.getData();
        data.config = CONFIG.deathwatch;
        return data;
    }
}