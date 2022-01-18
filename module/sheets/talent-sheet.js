export default class TalentSheet extends ItemSheet {
    get template() {
        return `systems/deathwatch/templates/sheets/talent-sheet.html`;
    }

    getData() {
        const data = super.getData();
        data.config = CONFIG.deathwatch;
        return data;
    }
}