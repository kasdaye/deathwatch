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
            html.find(".roll-skill").click(this._onSkillRoll.bind(this));
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

    async _onSkillRoll(event) {
        let actionName = event.currentTarget.dataset.actionName;
        let isBasic = (event.currentTarget.dataset.isBasic === 'true');
        let isTrained = (event.currentTarget.dataset.isTrained === 'true');
        let hasPlusTenUpgrade = (event.currentTarget.dataset.hasPlusTenUpgrade === 'true');
        let hasPlusTwentyUpgrade = (event.currentTarget.dataset.hasPlusTwentyUpgrade === 'true');

        let statisticValue = parseInt(event.currentTarget.dataset.actionValue);

        if (hasPlusTwentyUpgrade) {
            statisticValue += 20;
        } else if (hasPlusTenUpgrade) {
            statisticValue += 10;
        } else if (isBasic && !isTrained) {
            statisticValue = parseInt(statisticValue / 2)
        }

        this.showRollDialog(actionName, statisticValue);
    }

    async _onCharacteristicRoll(event) {
        let actionName = event.currentTarget.dataset.actionName;
        let statisticValue = parseInt(event.currentTarget.dataset.actionValue);
        this.showRollDialog(actionName, statisticValue);
    }

    async showRollDialog(actionName, statisticValue) {
        let confirmed = false;
        new Dialog({
            title: "Roll " + actionName,
            content: `
             <form>
              <div class="form-group">
               <label>Test Difficulty:</label>
               <select name="test-difficulty" id="test-difficulty">
                <option value="60">Trivial (+60)</option>
                <option value="50">Elementary (+50)</option>
                <option value="40">Simple (+40)</option>
                <option value="30">Easy (+30)</option>
                <option value="20">Routine (+20)</option>
                <option value="10">Ordinary (+10)</option>
                <option value="0" selected>Challenging (+0)</option>
                <option value="-10">Difficult (-10)</option>
                <option value="-20">Hard (-20)</option>
                <option value="-30">Very Hard (-30)</option>
                <option value="-40">Arduous (-40)</option>
                <option value="-50">Punishing (-50)</option>
                <option value="-60">Hellish (-60)</option>
               </select>
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
                    var roll = await new Roll("1d100", {}).roll({ async: true });
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
        let degrees;
        if (rollResult > finalTargetNumber) {
            result = "Failure";
            degrees = parseInt((rollResult - finalTargetNumber) / 10).toString() + " DoF";
        } else {
            result = "Success";
            degrees = parseInt((finalTargetNumber - rollResult) / 10).toString() + " DoS";
        }
        let difficultyDescription = this.getDifficultyDescription(testDifficulty);
        let rollFlavour = result + " on a " + difficultyDescription + " " + actionName + " Test by " + degrees;
        return rollFlavour;
    }

    getDifficultyDescription(testDifficulty) {
        let difficultyDescriptionMap = new Map();
        difficultyDescriptionMap.set(60, "Trivial (+60)");
        difficultyDescriptionMap.set(50, "Elementary (+50)");
        difficultyDescriptionMap.set(40, "Simple (+40)");
        difficultyDescriptionMap.set(30, "Easy (+30)");
        difficultyDescriptionMap.set(20, "Routine (+20)");
        difficultyDescriptionMap.set(10, "Ordinary (+10)");
        difficultyDescriptionMap.set(0, "Challenging (+0)");
        difficultyDescriptionMap.set(-10, "Difficult (-10)");
        difficultyDescriptionMap.set(-20, "Hard (-20)");
        difficultyDescriptionMap.set(-30, "Very Hard (-30)");
        difficultyDescriptionMap.set(-40, "Arduous (-40)");
        difficultyDescriptionMap.set(-50, "Punishing (-50)");
        difficultyDescriptionMap.set(-60, "Hellish (-60)");

        return difficultyDescriptionMap.get(testDifficulty);
    }
}