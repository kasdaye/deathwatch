export default class HordeSheet extends ActorSheet {
    get template() {
        return `systems/deathwatch/templates/sheets/horde-sheet.html`;
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
            html.find(".roll-attack").click(this._onAttackRoll.bind(this));

            html.find(".item-add").click(this._onItemAdd.bind(this));
            html.find(".item-edit").click(this._onItemEdit.bind(this));
            html.find(".item-delete").click(this._onItemDelete.bind(this));
        }

        super.activateListeners(html);
    }

    static get defaultOptions() {
        let options = mergeObject(super.defaultOptions, {
            scrollY: [".outer-content"],
            tabs: [{ navSelector: '.tabs', contentSelector: '.content', initial: 'combat' }]
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
        let statisticValue = parseInt(event.currentTarget.dataset.actionValue);
        this.showRollDialog(actionName, statisticValue);
    }

    async _onSkillRoll(event) {
        let actionName = event.currentTarget.dataset.actionName;
        let isBasic = (event.currentTarget.dataset.isBasic === 'true');
        let isTrained = (event.currentTarget.dataset.isTrained === 'true');
        let hasPlusTenUpgrade = (event.currentTarget.dataset.hasPlusTenUpgrade === 'true');
        let hasPlusTwentyUpgrade = (event.currentTarget.dataset.hasPlusTwentyUpgrade === 'true');

        let governingCharacteristic = event.currentTarget.dataset.governingCharacteristic;
        let statisticValue = this.object.data.data.characteristics[governingCharacteristic].value;

        if (hasPlusTwentyUpgrade) {
            statisticValue += 20;
        } else if (hasPlusTenUpgrade) {
            statisticValue += 10;
        } else if (isBasic && !isTrained) {
            statisticValue = parseInt(statisticValue / 2)
        }

        this.showRollDialog(actionName, statisticValue);
    }

    _onItemAdd(event) {
        event.preventDefault();
        let element = event.currentTarget;

        let itemData = {
            name: element.dataset.defaultName,
            type: element.dataset.type
        }

        return this.object.createEmbeddedDocuments("Item", [itemData]);
    }

    _onItemEdit(event) {
        event.preventDefault();
        let element = event.currentTarget;
        let itemId = element.closest(".actor-item").dataset.itemId;
        let item = this.object.items.get(itemId);
        item.sheet.render(true);
    }

    _onItemDelete(event) {
        event.preventDefault();
        let element = event.currentTarget;
        let itemId = element.closest(".actor-item").dataset.itemId;
        let item = this.object.items.get(itemId);
        item.delete();
    }

    async _onAttackRoll(event) {
        let itemId = event.currentTarget.dataset.itemId;
        let item = this.object.items.get(itemId);

        let governingCharacteristic = event.currentTarget.dataset.governingCharacteristic;
        let statisticValue = this.object.data.data.characteristics[governingCharacteristic].value;

        if (governingCharacteristic === "weaponSkill") {
            this.showMeleeAttackDialog(item, statisticValue);
        } else {
            this.showRangedAttackDialog(item, statisticValue);
        }
    }

    async showRollDialog(actionName, statisticValue) {
        let confirmed = false;
        new Dialog({
            title: "Roll " + actionName,
            content: this.getTestDifficultyHtml(),
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

    async showMeleeAttackDialog(item, statisticValue) {
        let confirmed = false;
        let actionName = "Standard Attack";
        let modifier = 0;
        new Dialog({
            title: "Attack with " + item.name,
            content: this.getTestDifficultyHtml(),
            buttons: {
                standardAttack: {
                    icon: '<i class="fas fa-check"></i>',
                    label: "Standard Attack",
                    callback: function () {
                        confirmed = true;
                        actionName = "Standard Attack";
                        modifier = 0;
                    }
                },
                allOutAttack: {
                    icon: '<i class="fas fa-check"></i>',
                    label: "All Out Attack",
                    callback: function () {
                        confirmed = true;
                        actionName = "All Out Attack";
                        modifier = 20;
                    }
                },
                calledShot: {
                    icon: '<i class="fas fa-check"></i>',
                    label: "Called Shot",
                    callback: function () {
                        confirmed = true;
                        actionName = "Called Shot";
                        modifier = -20;
                    }
                },
                charge: {
                    icon: '<i class="fas fa-check"></i>',
                    label: "Charge",
                    callback: function () {
                        confirmed = true;
                        actionName = "Charge";
                        modifier = 10;
                    }
                },
                guardedAttack: {
                    icon: '<i class="fas fa-check"></i>',
                    label: "Guarded Attack",
                    callback: function () {
                        confirmed = true;
                        actionName = "Guarded Attack";
                        modifier = -10;
                    }
                },
                cancelAttack: {
                    icon: '<i class="fas fa-times"></i>',
                    label: "Cancel Attack",
                    callback: () => confirmed = false
                }
            },
            default: "Cancel",
            close: async html => {
                if (confirmed) {
                    var roll = await new Roll("1d100", {}).roll({ async: true });
                    let testDifficulty = parseInt(html.find('[name=test-difficulty]')[0].value);
                    roll.toMessage({
                        flavor: this.createAttackRollFlavourString(roll.result, statisticValue + modifier, testDifficulty, actionName, item),
                        user: game.user.id,
                        speaker: { actor: this.object.data._id, alias: this.object.data.name }
                    });
                }
            }
        }).render(true);
    }

    async showRangedAttackDialog(item, statisticValue) {
        let confirmed = false;
        let actionName = "Standard Attack";
        let modifier = 0;
        new Dialog({
            title: "Attack with " + item.name,
            content: this.getTestDifficultyHtml(),
            buttons: {
                ...((item.data.data.singleShotRateOfFire === "S") && {
                    standardAttack: {
                        icon: '<i class="fas fa-check"></i>',
                        label: "Standard Attack",
                        callback: function () {
                            confirmed = true;
                            actionName = "Standard Attack";
                        }
                    }
                }),
                calledShot: {
                    icon: '<i class="fas fa-check"></i>',
                    label: "Called Shot",
                    callback: function () {
                        confirmed = true;
                        actionName = "Called Shot";
                        modifier = -20;
                    }
                },
                ...((item.data.data.fullAutomaticRateOfFire !== "-" && item.data.data.fullAutomaticRateOfFire > "0") && {
                    fullAutoBurst: {
                        icon: '<i class="fas fa-check"></i>',
                        label: "Full Auto Burst",
                        callback: function () {
                            confirmed = true;
                            actionName = "Full Auto Burst";
                            modifier = 20;
                        }
                    }
                }),
                ...((item.data.data.semiAutomaticRateOfFire !== "-" && item.data.data.semiAutomaticRateOfFire > "0") && {
                    semiAutoBurst: {
                        icon: '<i class="fas fa-check"></i>',
                        label: "Semi Auto Burst",
                        callback: function () {
                            confirmed = true;
                            actionName = "Semi Auto Burst";
                            modifier = 10;
                        }
                    }
                }),
                cancelAttack: {
                    icon: '<i class="fas fa-times"></i>',
                    label: "Cancel Attack",
                    callback: () => confirmed = false
                }
            },
            default: "Cancel",
            close: async html => {
                if (confirmed) {
                    var roll = await new Roll("1d100", {}).roll({ async: true });
                    let testDifficulty = parseInt(html.find('[name=test-difficulty]')[0].value);
                    roll.toMessage({
                        flavor: this.createAttackRollFlavourString(roll.result, statisticValue + modifier, testDifficulty, actionName, item),
                        user: game.user.id,
                        speaker: { actor: this.object.data._id, alias: this.object.data.name }
                    });
                }
            }
        }).render(true);
    }

    getTestDifficultyHtml() {
        return `
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
        `;
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
        return this.composeRollFlavourString(result, difficultyDescription, actionName, degrees);
    }

    composeRollFlavourString(result, difficultyDescription, actionName, degrees) {
        return result + " on a " + difficultyDescription + " " + actionName + " Test by " + degrees;
    }

    createAttackRollFlavourString(rollResult, statisticValue, testDifficulty, actionName, item) {
        let finalTargetNumber = statisticValue + testDifficulty;
        let difficultyDescription = this.getDifficultyDescription(testDifficulty);

        if (rollResult > finalTargetNumber) {
            let degrees = parseInt((rollResult - finalTargetNumber) / 10).toString();
            return this.composeMissedAttackRollFlavourString(difficultyDescription, actionName, degrees, item.name);
        } else {
            let degrees = parseInt((finalTargetNumber - rollResult) / 10).toString();
            let hitLocation = this.getHitLocation(rollResult);
            let extraHits = 0;
            if (actionName === "Full Auto Burst" && degrees >= 1) {
                extraHits = Math.min(item.data.data.fullAutomaticRateOfFire - 1, degrees);
                hitLocation = this.addMultipleHitLocations(hitLocation, extraHits);
            } else if (actionName === "Semi Auto Burst" && degrees >= 2) {
                extraHits = Math.min(item.data.data.semiAutomaticRateOfFire - 1, parseInt(degrees / 2));
                hitLocation = this.addMultipleHitLocations(hitLocation, extraHits);
            }
            this.rollDamage(this.object, item, 1 + extraHits);
            return this.composeHitAttackRollFlavourString(difficultyDescription, actionName, degrees, item.name, hitLocation);
        }
    }

    composeMissedAttackRollFlavourString(difficultyDescription, actionName, degrees, weaponName) {
        return "Missed with " + degrees + " DoF on a " + difficultyDescription + " " + actionName + " using " + weaponName + ".";
    }

    composeHitAttackRollFlavourString(difficultyDescription, actionName, degrees, weaponName, hitLocation) {
        return "Hit with " + degrees + " DoS on a " + difficultyDescription + " " + actionName + " using " + weaponName + ". Hitting the target's " + hitLocation + ".";
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

    getHitLocation(rollResult) {
        let dieResultString = rollResult.toString();
        let lastDigit = dieResultString.substr(dieResultString.length - 1, 1);
        let firstDigit = dieResultString.substr(dieResultString.length - 2, 1);
        let reversedDieResultString = lastDigit + firstDigit;
        let reversedDieResult = parseInt(reversedDieResultString);

        if (reversedDieResult >= 1 && reversedDieResult <= 10) {
            return "Head";
        } else if (reversedDieResult >= 11 && reversedDieResult <= 20) {
            return "Right Arm";
        } else if (reversedDieResult >= 21 && reversedDieResult <= 30) {
            return "Left Arm";
        } else if (reversedDieResult >= 31 && reversedDieResult <= 70) {
            return "Body";
        } else if (reversedDieResult >= 71 && reversedDieResult <= 85) {
            return "Right Leg";
        } else if (reversedDieResult === 0 || (reversedDieResult >= 86 && reversedDieResult <= 99)) {
            return "Left Leg";
        } else {
            return "Unknown";
        }
    }

    addMultipleHitLocations(hitLocation, extraHits) {
        let headExtraHitLocations = ["Head", "Right Arm", "Body", "Left Arm", "Body"];
        let rightArmExtraHitLocations = ["Right Arm", "Body", "Head", "Body", "Right Arm"];
        let leftArmExtraHitLocations = ["Left Arm", "Body", "Head", "Body", "Left Arm"];
        let bodyExtraHitLocations = ["Body", "Left Arm", "Head", "Right Arm", "Body"];
        let rightLegExtraHitLocations = ["Right Leg", "Body", "Right Arm", "Head", "Body"];
        let leftLegExtraHitLocations = ["Left Leg", "Body", "Left Arm", "Head", "Body"];

        let extraHitLocationArray;
        if (hitLocation === "Head") {
            extraHitLocationArray = headExtraHitLocations;
        } else if (hitLocation === "Right Arm") {
            extraHitLocationArray = rightArmExtraHitLocations;
        } else if (hitLocation === "Left Arm") {
            extraHitLocationArray = leftArmExtraHitLocations;
        } else if (hitLocation === "Body") {
            extraHitLocationArray = bodyExtraHitLocations;
        } else if (hitLocation === "Right Leg") {
            extraHitLocationArray = rightLegExtraHitLocations;
        } else if (hitLocation === "Left Leg") {
            extraHitLocationArray = leftLegExtraHitLocations;
        }

        let extraHitLocations = "";
        for (let i = 0; i < extraHits; i++) {
            let joiner = ", ";
            if (i === extraHits - 1) {
                joiner = ", and ";
            }
            if (i < 5) {
                extraHitLocations += joiner + extraHitLocationArray[i];
            } else {
                extraHitLocations += joiner + extraHitLocationArray[4];
            }
        }
        hitLocation += extraHitLocations;
        return hitLocation;
    }

    async rollDamage(actor, item, hits) {
        console.log(actor);
        let extraDamageDiceFromMagnitude = Math.min(2, parseInt(actor.data.data.injury.magnitude.value / 10))
        let extraDamageString = "";
        if (extraDamageDiceFromMagnitude > 0) {
            extraDamageString = " + " + extraDamageDiceFromMagnitude + "d10";
        }
        for (let i = 1; i <= hits; i++) {
            setTimeout(async function () {
                let roll = await new Roll(item.data.data.damage + extraDamageString, {}).roll({ async: true });
                roll.toMessage({
                    flavor: roll._total.toString() + " " + item.data.data.type + " damage.",
                    user: game.user.id,
                    speaker: { actor: actor.data._id, alias: actor.data.name }
                });
            }, i * 1000);
        }
    }
}