export default class GearSheet extends ItemSheet {
    get template() {
        return `systems/deathwatch/templates/sheets/gear-sheet.html`;
    }

    getData() {
        const data = super.getData();
        data.config = CONFIG.deathwatch;
        return data;
    }
}