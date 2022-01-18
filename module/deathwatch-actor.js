export default class DeathwatchActor extends Actor {

    _onCreate(data, options, userId) {
        super._onCreate(data, options, userId);


        if (this.data.type === "deathwatchMarine") {
            this.addDefaultSkills(this);
        }
    }

    addDefaultSkills(actor) {
        const awareness = {
            name: "Awareness",
            data: {
                "characteristic": "perception",
                "isBasic": true,
                "isTrained": true,
                "hasPlus10Upgrade": false,
                "hasPlus20Upgrade": false,
            },
            img: "icons/svg/item-bag.svg",
            type: "skill"
          };      
        this.createEmbeddedDocuments("Item", [awareness]);

        const carouse = {
            name: "Carouse",
            data: {
                "characteristic": "toughness",
                "isBasic": true,
                "isTrained": false,
                "hasPlus10Upgrade": false,
                "hasPlus20Upgrade": false,
            },
            img: "icons/svg/item-bag.svg",
            type: "skill"
          };      
        this.createEmbeddedDocuments("Item", [carouse]);

        const charm = {
            name: "Charm",
            data: {
                "characteristic": "fellowship",
                "isBasic": true,
                "isTrained": false,
                "hasPlus10Upgrade": false,
                "hasPlus20Upgrade": false,
            },
            img: "icons/svg/item-bag.svg",
            type: "skill"
          };      
        this.createEmbeddedDocuments("Item", [charm]);

        const ciphersChapterRunes = {
            name: "Ciphers (Chapter Runes)",
            data: {
                "characteristic": "intelligence",
                "isBasic": false,
                "isTrained": true,
                "hasPlus10Upgrade": false,
                "hasPlus20Upgrade": false,
            },
            img: "icons/svg/item-bag.svg",
            type: "skill"
          };      
        this.createEmbeddedDocuments("Item", [ciphersChapterRunes]);

        const climb = {
            name: "Climb",
            data: {
                "characteristic": "strength",
                "isBasic": true,
                "isTrained": true,
                "hasPlus10Upgrade": false,
                "hasPlus20Upgrade": false,
            },
            img: "icons/svg/item-bag.svg",
            type: "skill"
          };      
        this.createEmbeddedDocuments("Item", [climb]);

        const command = {
            name: "Command",
            data: {
                "characteristic": "fellowship",
                "isBasic": true,
                "isTrained": false,
                "hasPlus10Upgrade": false,
                "hasPlus20Upgrade": false,
            },
            img: "icons/svg/item-bag.svg",
            type: "skill"
          };      
        this.createEmbeddedDocuments("Item", [command]);

        const commonLoreAdeptusAstartes = {
            name: "Common Lore (Adeptus Astartes)",
            data: {
                "characteristic": "intelligence",
                "isBasic": false,
                "isTrained": true,
                "hasPlus10Upgrade": false,
                "hasPlus20Upgrade": false,
            },
            img: "icons/svg/item-bag.svg",
            type: "skill"
          };      
        this.createEmbeddedDocuments("Item", [commonLoreAdeptusAstartes]);

        const commonLoreDeathwatch = {
            name: "Common Lore (Deathwatch)",
            data: {
                "characteristic": "intelligence",
                "isBasic": false,
                "isTrained": true,
                "hasPlus10Upgrade": false,
                "hasPlus20Upgrade": false,
            },
            img: "icons/svg/item-bag.svg",
            type: "skill"
          };      
        this.createEmbeddedDocuments("Item", [commonLoreDeathwatch]);

        const commonLoreImperium = {
            name: "Common Lore (Imperium)",
            data: {
                "characteristic": "intelligence",
                "isBasic": false,
                "isTrained": true,
                "hasPlus10Upgrade": false,
                "hasPlus20Upgrade": false,
            },
            img: "icons/svg/item-bag.svg",
            type: "skill"
          };      
        this.createEmbeddedDocuments("Item", [commonLoreImperium]);

        const commonLoreWar = {
            name: "Common Lore (War)",
            data: {
                "characteristic": "intelligence",
                "isBasic": false,
                "isTrained": true,
                "hasPlus10Upgrade": false,
                "hasPlus20Upgrade": false,
            },
            img: "icons/svg/item-bag.svg",
            type: "skill"
          };      
        this.createEmbeddedDocuments("Item", [commonLoreWar]);

        const concealment = {
            name: "Concealment",
            data: {
                "characteristic": "agility",
                "isBasic": true,
                "isTrained": true,
                "hasPlus10Upgrade": false,
                "hasPlus20Upgrade": false,
            },
            img: "icons/svg/item-bag.svg",
            type: "skill"
          };      
        this.createEmbeddedDocuments("Item", [concealment]);

        const contortionist = {
            name: "Contortionist",
            data: {
                "characteristic": "agility",
                "isBasic": true,
                "isTrained": false,
                "hasPlus10Upgrade": false,
                "hasPlus20Upgrade": false,
            },
            img: "icons/svg/item-bag.svg",
            type: "skill"
          };      
        this.createEmbeddedDocuments("Item", [contortionist]);

        const deceive = {
            name: "Deceive",
            data: {
                "characteristic": "fellowship",
                "isBasic": true,
                "isTrained": false,
                "hasPlus10Upgrade": false,
                "hasPlus20Upgrade": false,
            },
            img: "icons/svg/item-bag.svg",
            type: "skill"
          };      
        this.createEmbeddedDocuments("Item", [deceive]);

        const dodge = {
            name: "Dodge",
            data: {
                "characteristic": "agility",
                "isBasic": true,
                "isTrained": true,
                "hasPlus10Upgrade": false,
                "hasPlus20Upgrade": false,
            },
            img: "icons/svg/item-bag.svg",
            type: "skill"
          };      
        this.createEmbeddedDocuments("Item", [dodge]);

        const driveGroundVehicles = {
            name: "Drive (Ground Vehicles)",
            data: {
                "characteristic": "agility",
                "isBasic": false,
                "isTrained": true,
                "hasPlus10Upgrade": false,
                "hasPlus20Upgrade": false,
            },
            img: "icons/svg/item-bag.svg",
            type: "skill"
          };      
        this.createEmbeddedDocuments("Item", [driveGroundVehicles]);

        const evaluate = {
            name: "Evaluate",
            data: {
                "characteristic": "intelligence",
                "isBasic": true,
                "isTrained": false,
                "hasPlus10Upgrade": false,
                "hasPlus20Upgrade": false,
            },
            img: "icons/svg/item-bag.svg",
            type: "skill"
          };      
        this.createEmbeddedDocuments("Item", [evaluate]);

        const forbiddenLoreXenos = {
            name: "Forbidden Lore (Xenos)",
            data: {
                "characteristic": "intelligence",
                "isBasic": false,
                "isTrained": true,
                "hasPlus10Upgrade": false,
                "hasPlus20Upgrade": false,
            },
            img: "icons/svg/item-bag.svg",
            type: "skill"
          };      
        this.createEmbeddedDocuments("Item", [forbiddenLoreXenos]);

        const gamble = {
            name: "Gamble",
            data: {
                "characteristic": "perception",
                "isBasic": true,
                "isTrained": false,
                "hasPlus10Upgrade": false,
                "hasPlus20Upgrade": false,
            },
            img: "icons/svg/item-bag.svg",
            type: "skill"
          };      
        this.createEmbeddedDocuments("Item", [gamble]);

        const inquiry = {
            name: "Inquiry",
            data: {
                "characteristic": "fellowship",
                "isBasic": true,
                "isTrained": false,
                "hasPlus10Upgrade": false,
                "hasPlus20Upgrade": false,
            },
            img: "icons/svg/item-bag.svg",
            type: "skill"
          };      
        this.createEmbeddedDocuments("Item", [inquiry]);

        const intimidate = {
            name: "Intimidate",
            data: {
                "characteristic": "strength",
                "isBasic": true,
                "isTrained": true,
                "hasPlus10Upgrade": false,
                "hasPlus20Upgrade": false,
            },
            img: "icons/svg/item-bag.svg",
            type: "skill"
          };      
        this.createEmbeddedDocuments("Item", [intimidate]);

        const literacy = {
            name: "Literacy",
            data: {
                "characteristic": "intelligence",
                "isBasic": false,
                "isTrained": true,
                "hasPlus10Upgrade": false,
                "hasPlus20Upgrade": false,
            },
            img: "icons/svg/item-bag.svg",
            type: "skill"
          };      
        this.createEmbeddedDocuments("Item", [literacy]);

        const logic = {
            name: "Logic",
            data: {
                "characteristic": "intelligence",
                "isBasic": true,
                "isTrained": false,
                "hasPlus10Upgrade": false,
                "hasPlus20Upgrade": false,
            },
            img: "icons/svg/item-bag.svg",
            type: "skill"
          };      
        this.createEmbeddedDocuments("Item", [logic]);

        const navigationSurface = {
            name: "Navigation (Surface)",
            data: {
                "characteristic": "intelligence",
                "isBasic": false,
                "isTrained": true,
                "hasPlus10Upgrade": false,
                "hasPlus20Upgrade": false,
            },
            img: "icons/svg/item-bag.svg",
            type: "skill"
          };      
        this.createEmbeddedDocuments("Item", [navigationSurface]);

        const scholasticLoreCodexAstartes = {
            name: "Scholastic Lore (Codex Astartes)",
            data: {
                "characteristic": "intelligence",
                "isBasic": false,
                "isTrained": true,
                "hasPlus10Upgrade": false,
                "hasPlus20Upgrade": false,
            },
            img: "icons/svg/item-bag.svg",
            type: "skill"
          };      
        this.createEmbeddedDocuments("Item", [scholasticLoreCodexAstartes]);

        const scrutiny = {
            name: "Scrutiny",
            data: {
                "characteristic": "perception",
                "isBasic": true,
                "isTrained": false,
                "hasPlus10Upgrade": false,
                "hasPlus20Upgrade": false,
            },
            img: "icons/svg/item-bag.svg",
            type: "skill"
          };      
        this.createEmbeddedDocuments("Item", [scrutiny]);

        const search = {
            name: "Search",
            data: {
                "characteristic": "perception",
                "isBasic": true,
                "isTrained": false,
                "hasPlus10Upgrade": false,
                "hasPlus20Upgrade": false,
            },
            img: "icons/svg/item-bag.svg",
            type: "skill"
          };      
        this.createEmbeddedDocuments("Item", [search]);

        const silentMove = {
            name: "Silent Move",
            data: {
                "characteristic": "agility",
                "isBasic": true,
                "isTrained": true,
                "hasPlus10Upgrade": false,
                "hasPlus20Upgrade": false,
            },
            img: "icons/svg/item-bag.svg",
            type: "skill"
          };      
        this.createEmbeddedDocuments("Item", [silentMove]);

        const speakLanguageHighGothic = {
            name: "Speak Language (High Gothic)",
            data: {
                "characteristic": "intelligence",
                "isBasic": false,
                "isTrained": true,
                "hasPlus10Upgrade": false,
                "hasPlus20Upgrade": false,
            },
            img: "icons/svg/item-bag.svg",
            type: "skill"
          };      
        this.createEmbeddedDocuments("Item", [speakLanguageHighGothic]);

        const speakLanguageLowGothic = {
            name: "Speak Language (Low Gothic)",
            data: {
                "characteristic": "intelligence",
                "isBasic": false,
                "isTrained": true,
                "hasPlus10Upgrade": false,
                "hasPlus20Upgrade": false,
            },
            img: "icons/svg/item-bag.svg",
            type: "skill"
          };      
        this.createEmbeddedDocuments("Item", [speakLanguageLowGothic]);

        const swim = {
            name: "Swim",
            data: {
                "characteristic": "strength",
                "isBasic": true,
                "isTrained": false,
                "hasPlus10Upgrade": false,
                "hasPlus20Upgrade": false,
            },
            img: "icons/svg/item-bag.svg",
            type: "skill"
          };      
        this.createEmbeddedDocuments("Item", [swim]);

        const tacticsChooseOne = {
            name: "Tactics (Choose one)",
            data: {
                "characteristic": "intelligence",
                "isBasic": false,
                "isTrained": true,
                "hasPlus10Upgrade": false,
                "hasPlus20Upgrade": false,
            },
            img: "icons/svg/item-bag.svg",
            type: "skill"
          };      
        this.createEmbeddedDocuments("Item", [tacticsChooseOne]);

        const tracking = {
            name: "Tracking",
            data: {
                "characteristic": "intelligence",
                "isBasic": false,
                "isTrained": true,
                "hasPlus10Upgrade": false,
                "hasPlus20Upgrade": false,
            },
            img: "icons/svg/item-bag.svg",
            type: "skill"
          };      
        this.createEmbeddedDocuments("Item", [tracking]);
    }
}