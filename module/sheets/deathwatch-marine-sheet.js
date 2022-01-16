export default class DeathwatchMarineSheet extends ActorSheet {
    get template() {
        return `systems/deathwatch/templates/sheets/deathwatch-marine-sheet.html`;
    }

    getData() {
        const data = super.getData();
        data.config = CONFIG.deathwatch;
        return data;
    }

    activateListeners(html) {
        if (this.actor.isOwner) {
            html.find(".checkbox-edit").change(this._onCheckboxEdit.bind(this));
            html.find(".roll-characteristic").click(this._onCharacteristicRoll.bind(this))
            // html.find(".skill-roll").click(this._onSkillRoll.bind(this));
            // html.find(".item-edit").click(this._onItemEdit.bind(this));
            // html.find(".item-delete").click(this._onItemDelete.bind(this));
        }

        super.activateListeners(html);
    }

    static get defaultOptions() {
        let options = mergeObject(super.defaultOptions, {
            scrollY: [".outer-content"],
            tabs: [{ navSelector: '.tabs', contentSelector: '.content', initial: 'marine-details' }]
        });
        return options;
    }

    _onCheckboxEdit(event) {
        event.preventDefault();

        let element = event.currentTarget;
        let itemId = element.closest(".actor-item").dataset.itemId;
        let item = this.object.items.get(itemId);
        let field = element.dataset.field;

        return item.update({ [field]: element.checked });
    }

    async _onCharacteristicRoll(event) {
        let actionName = event.currentTarget.dataset.actionName;
        let confirmed = false;

        new Dialog({
            title: "Roll " + actionName,
            content: `
             <form>
              <div class="form-group">
               <label>Test Difficulty:</label>
               <input id="test-difficulty" name="test-difficulty" value="0"></input>
              </div>
             </form>
             `,
            buttons: {
                one: {
                    icon: '<i class="fas fa-check"></i>',
                    label: "Roll!",
                    callback: () => confirmed = true
                },
                two: {
                    icon: '<i class="fas fa-times"></i>',
                    label: "Cancel",
                    callback: () => confirmed = false
                }
            },
            default: "Cancel",
            close: async html => {
                if (confirmed) {
                    var roll = await new Roll("1d100", {}).roll({async: true});
                    let statisticValue = parseInt(event.currentTarget.dataset.actionValue);
                    let testDifficulty = parseInt(html.find('[name=test-difficulty]')[0].value);
                    roll.toMessage({
                        flavor: this.createRollFlavourString(roll.result, statisticValue, testDifficulty, actionName),
                        user: game.user.id,
                        speaker: { actor: this.object.data._id, alias: this.object.data.name }
                    });
                }
            }
        }).render(true);
    }

    createRollFlavourString(rollResult, statisticValue, testDifficulty, actionName) {
        let finalTargetNumber = statisticValue + testDifficulty;
        let result;
        if (rollResult > finalTargetNumber) {
            result = "Failure";
        } else {
            result = "Success";
        }
        let rollFlavour = result + " on " + actionName + "!";
        return rollFlavour;
    }
}