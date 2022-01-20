export default class WeaponSheet extends ItemSheet {
    get template() {
        return `systems/deathwatch/templates/sheets/weapon-sheet.html`;
    }

    getData() {
        const data = super.getData();
        data.config = CONFIG.deathwatch;
        return data;
    }
}