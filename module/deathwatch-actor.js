export default class DeathwatchActor extends Actor {

  _onCreate(data, options, userId) {
    super._onCreate(data, options, userId);


    if (this.data.type === "deathwatchMarine") {
      this.addDefaultSkills(this);
      this.addDefaultTalents(this);
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
        "hasPlus20Upgrade": false
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
        "hasPlus20Upgrade": false
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
        "hasPlus20Upgrade": false
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
        "hasPlus20Upgrade": false
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
        "hasPlus20Upgrade": false
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
        "hasPlus20Upgrade": false
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
        "hasPlus20Upgrade": false
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
        "hasPlus20Upgrade": false
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
        "hasPlus20Upgrade": false
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
        "hasPlus20Upgrade": false
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
        "hasPlus20Upgrade": false
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
        "hasPlus20Upgrade": false
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
        "hasPlus20Upgrade": false
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
        "hasPlus20Upgrade": false
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
        "hasPlus20Upgrade": false
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
        "hasPlus20Upgrade": false
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
        "hasPlus20Upgrade": false
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
        "hasPlus20Upgrade": false
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
        "hasPlus20Upgrade": false
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
        "hasPlus20Upgrade": false
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
        "hasPlus20Upgrade": false
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
        "hasPlus20Upgrade": false
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
        "hasPlus20Upgrade": false
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
        "hasPlus20Upgrade": false
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
        "hasPlus20Upgrade": false
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
        "hasPlus20Upgrade": false
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
        "hasPlus20Upgrade": false
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
        "hasPlus20Upgrade": false
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
        "hasPlus20Upgrade": false
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
        "hasPlus20Upgrade": false
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
        "hasPlus20Upgrade": false
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
        "hasPlus20Upgrade": false
      },
      img: "icons/svg/item-bag.svg",
      type: "skill"
    };
    this.createEmbeddedDocuments("Item", [tracking]);
  }

  addDefaultTalents(actor) {
    const ambidextrous = {
      name: "Ambidextrous",
      data: {
        "benefit": "Use either hand equally well",
        "description": "<p>This Talent does not represent true ambidexterity so much as sufficient training with both hands to make the distinction moot. The character may use either hand equally well for any task, and does not suffer the -20 penalty for actions using his off hand.</p><p><b>Special:</b> When combined with a Two-Weapon Wielder Talent, the penalty for making attacks with both weapons in the same turn drops to –10.</p>"
      },
      img: "icons/svg/item-bag.svg",
      type: "talent"
    };
    this.createEmbeddedDocuments("Item", [ambidextrous]);

    const astartesWeaponsTraining = {
      name: "Astartes Weapons Training",
      data: {
        "benefit": "Proficiency with all non-exotic weapons",
        "description": "<p>Battle-Brothers of the Adeptus Astartes spend years becoming proficient with all manner of weapons. By the time that a Battle-Brother has entered service in a squad, he will have not only trained with both heavy and melee weapons, but used those weapons on countless battlefields. The Battle-Brother is proficient with bolt, chain, melta, plasma, power, flame, primitive (ranged and melee), las weapons, launchers, solid projectile, and thrown weapons of all Classes. In essence, the only weapons that the Battle-Brother is not proficient with are exotic weapons; for these, he must acquire individual proficiencies as normal.</p>"
      },
      img: "icons/svg/item-bag.svg",
      type: "talent"
    };
    this.createEmbeddedDocuments("Item", [astartesWeaponsTraining]);

    const bulgingBiceps = {
      name: "Bulging Biceps",
      data: {
        "benefit": "Remove bracing requirement for certain weapons",
        "description": "<p>Whereas a weaker man would be sent flying when using heavy weapons, the character's strong physique allows him to remain standing . The character can fire heavy weapons using Semi-Auto Burst or Full Auto Burst without bracing, and he does not suffer the -30 penalty for failing to brace.</p>"
      },
      img: "icons/svg/item-bag.svg",
      type: "talent"
    };
    this.createEmbeddedDocuments("Item", [bulgingBiceps]);

    const deathwatchTraining = {
      name: "Deathwatch Training",
      data: {
        "benefit": "The Space Marine gains bonuses when fighting aliens",
        "description": "<p>All Deathwatch Space Marines automatically confirm any Righteous Fury results (see page 245) against alien enemies without needing to re-roll the Ballistic Skill Test or Weapon Skill Test.</p>"
      },
      img: "icons/svg/item-bag.svg",
      type: "talent"
    };
    this.createEmbeddedDocuments("Item", [deathwatchTraining]);

    const heightenedSensesHearing = {
      name: "Heightened Senses (Hearing)",
      data: {
        "benefit": "Gain +10 bonus to particular sense",
        "description": "<p>Either genetics or augmetics have made one of the character's senses are superior to others. When the character gains this Talent, select one of the five senses. The character gains a +10 bonus to any tests specifically involving this sense. Thus, Heightened Senses (Sight) would apply to an Awareness Test to see a distant flock of shale crows, but not to a Ballistic Skill Test or a Weapon Skill Test simply because the character is using his eyes.</p>"
      },
      img: "icons/svg/item-bag.svg",
      type: "talent"
    };
    this.createEmbeddedDocuments("Item", [heightenedSensesHearing]);

    const heightenedSensesSight = {
      name: "Heightened Senses (Sight)",
      data: {
        "benefit": "Gain +10 bonus to particular sense",
        "description": "<p>Either genetics or augmetics have made one of the character's senses are superior to others. When the character gains this Talent, select one of the five senses. The character gains a +10 bonus to any tests specifically involving this sense. Thus, Heightened Senses (Sight) would apply to an Awareness Test to see a distant flock of shale crows, but not to a Ballistic Skill Test or a Weapon Skill Test simply because the character is using his eyes.</p>"
      },
      img: "icons/svg/item-bag.svg",
      type: "talent"
    };
    this.createEmbeddedDocuments("Item", [heightenedSensesSight]);

    const killingStrike = {
      name: "Killing Strike",
      data: {
        "benefit": "Spend a Fate Point to make your melee attack impossible to parry or dodge",
        "description": "<p>Space Marines are amongst the deadliest warriors in the galaxy, and they have learned how best to place their blows for maximum effect. When taking the All-Out Attack action, a Space Marine may spend a Fate Point (before rolling the dice) to make his melee attacks for that round impossible to parry or dodge.</p>"
      },
      img: "icons/svg/item-bag.svg",
      type: "talent"
    };
    this.createEmbeddedDocuments("Item", [killingStrike]);

    const nervesOfSteel = {
      name: "Nerves of Steel",
      data: {
        "benefit": "Re-roll failed tests to avoid pinning",
        "description": "<p>Long years on the battlefield enable the character to remain calm as fire impacts all around them. The character may re-roll failed Willpower Tests to avoid or recover from Pinning.</p>"
      },
      img: "icons/svg/item-bag.svg",
      type: "talent"
    };
    this.createEmbeddedDocuments("Item", [nervesOfSteel]);

    const quickDraw = {
      name: "Quick Draw",
      data: {
        "benefit": "Ready as a Free Action",
        "description": "<p>The character has practiced so frequently with his weapons that they practically leap into his hands in response to a simple thought. The character can Ready as a Free Action when armed with a pistol or basic ranged weapon, or a melee weapon that can be wielded in one hand.</p>"
      },
      img: "icons/svg/item-bag.svg",
      type: "talent"
    };
    this.createEmbeddedDocuments("Item", [quickDraw]);

    const resistancePsychicPowers = {
      name: "Resistance (Psychic Powers)",
      data: {
        "benefit": "Gain +10 bonus to Resistance Tests",
        "description": "<p>The character's background, experience, training, exposure, or plain stubbornness has developed a resistance within him. Each time the character selects this Talent, choose one area of resistance. The character gains a +10 bonus when making tests to resist the effects of this group. The character's GM may wish to approve certain choices or have them justified by the character's past.</p>"
      },
      img: "icons/svg/item-bag.svg",
      type: "talent"
    };
    this.createEmbeddedDocuments("Item", [resistancePsychicPowers]);

    const trueGrit = {
      name: "True Grit",
      data: {
        "benefit": "Reduce Critical Damage the character takes",
        "description": "<p>The character is able to shrug off wounds that would fell lesser men. Whenever the character suffers Critical Damage, halve the result (rounding up).</p><p><b>Example:</b> Agamemnon takes a grievous wound from a tyranid warrior. After reduction for Armour and Toughness, the Scything Talon strike still does 8 Damage. Unfortunately, it’s been tough going and Agamemnon only has 4 Wounds remaining, which would normally result in 4 points of Critical Damage. However, since he has the True Grit Talent, he only takes 2 points of Critical Damage.</p>"
      },
      img: "icons/svg/item-bag.svg",
      type: "talent"
    };
    this.createEmbeddedDocuments("Item", [trueGrit]);

    const unarmedMaster = {
      name: "Unarmed Master",
      data: {
        "benefit": "Attacks do 1d10+SB Damage and lack the Primitive trait",
        "description": "<p>The character has developed unequalled mastery of unarmed combat techniques. The character's unarmed combat attacks do 1d10 + Strength Bonus in Impact Damage, and these attacks no longer have the Primitive quality.</p>"
      },
      img: "icons/svg/item-bag.svg",
      type: "talent"
    };
    this.createEmbeddedDocuments("Item", [unarmedMaster]);

    const unarmedWarrior = {
      name: "Unarmed Warrior",
      data: {
        "benefit": "Deal 1d10-3+SB with unarmed attacks",
        "description": "<p>Due to extensive training in unarmed combat, the character's unarmed combat attacks do 1d10-3 + Strength Bonus in Damage instead of 1d5-3. Because of the character's advanced training against both armed and unarmed foes, he does not count as Unarmed, as defined on page 245, when making attacks against armed opponents. The character's unarmed attacks still count as having the Primitive quality.</p>"
      },
      img: "icons/svg/item-bag.svg",
      type: "talent"
    };
    this.createEmbeddedDocuments("Item", [unarmedWarrior]);

    const unnaturalStrengthTwo = {
      name: "Unnatural Strength (x2)",
      data: {
        "benefit": "Increases one Characteristic Bonus",
        "description": "<p>One or more of the creature\'s Characteristics is unnatural. Each time this trait is gained, select a Characteristic, and double its bonus. For example, a creature with a Strength of 41 normally has a 4 Strength Bonus. With this trait, its Strength Bonus increases to 8.</p><p>The trait may be gained multiple times. Each time, you may select a new Characteristic or one chosen previously. Each time you apply this trait to the same Characteristic, the Bonus multiplier increases by 1. For example, one selection multiplies the Characteristic Bonus by ×2, two selections by ×3, and three selections ×4. Note this trait does not modify the creature\'s movement.</p><p>During Opposed Characteristic Tests, on a success, the bonus multiplier is added to the degree of success. Any additional multipliers for Unnatural Characteristics (i.e., if a Space Marine with Unnatural Strength (x2) uses a Powerfist, which doubles the user\'s Strength Bonus), simply improves the existing multiplier by 1. For a Space Marine using a Powerfist, he would triple his Strength Bonus rather than doubling it and then doubling it again.</p><p>When taking a Skill Test based upon a Characteristic with the Unnatural trait, the base Difficulty of the Test is staged downwards one level for degree of multiplier past normal (to a maximum of +30), For example: the Archmagos Voltaic has a Dark Age of Technology cortical implant giving him Unnatural Intelligence (×3). He is called on to repair a damaged plasma core using his Intelligence based Tech Use skill. Normally this would be a Very Hard (–30) Test, but thanks to his Unnatural Intelligence the Difficulty is reduced by two stages to Difficult (–10), (–1 stage for ×2, and –1 for ×3).</p><p>During Opposed Characteristic Tests, where success is achieved, the Unnatural multiplier is added to the degrees of success. In the case of a tie, the participant without the Unnatural Characteristic trait loses the Opposed Test. For example: Garm Felbood is struggling with a tentacled monstrosity from the swamps of Dusk. Garm has Strength 40 and the thing from the swamp has Strength 33 (Unnatural (×2)). Garm rolls 20 (two degrees of success) and the thing rolls 30 (straight success), unfortunately the thing adds +2 degrees of success because of its (×2) modifier, bringing the Opposed Test to a draw. This translates to a victory to the swamp thing as it has Unnatural Strength and poor old Garm does not!</p>"
      },
      img: "icons/svg/item-bag.svg",
      type: "talent"
    };
    this.createEmbeddedDocuments("Item", [unnaturalStrengthTwo]);

    const unnaturalToughnessTwo = {
      name: "Unnatural Toughness (x2)",
      data: {
        "benefit": "Increases one Characteristic Bonus",
        "description": "<p>One or more of the creature\'s Characteristics is unnatural. Each time this trait is gained, select a Characteristic, and double its bonus. For example, a creature with a Strength of 41 normally has a 4 Strength Bonus. With this trait, its Strength Bonus increases to 8.</p><p>The trait may be gained multiple times. Each time, you may select a new Characteristic or one chosen previously. Each time you apply this trait to the same Characteristic, the Bonus multiplier increases by 1. For example, one selection multiplies the Characteristic Bonus by ×2, two selections by ×3, and three selections ×4. Note this trait does not modify the creature\'s movement.</p><p>During Opposed Characteristic Tests, on a success, the bonus multiplier is added to the degree of success. Any additional multipliers for Unnatural Characteristics (i.e., if a Space Marine with Unnatural Strength (x2) uses a Powerfist, which doubles the user\'s Strength Bonus), simply improves the existing multiplier by 1. For a Space Marine using a Powerfist, he would triple his Strength Bonus rather than doubling it and then doubling it again.</p><p>When taking a Skill Test based upon a Characteristic with the Unnatural trait, the base Difficulty of the Test is staged downwards one level for degree of multiplier past normal (to a maximum of +30), For example: the Archmagos Voltaic has a Dark Age of Technology cortical implant giving him Unnatural Intelligence (×3). He is called on to repair a damaged plasma core using his Intelligence based Tech Use skill. Normally this would be a Very Hard (–30) Test, but thanks to his Unnatural Intelligence the Difficulty is reduced by two stages to Difficult (–10), (–1 stage for ×2, and –1 for ×3).</p><p>During Opposed Characteristic Tests, where success is achieved, the Unnatural multiplier is added to the degrees of success. In the case of a tie, the participant without the Unnatural Characteristic trait loses the Opposed Test. For example: Garm Felbood is struggling with a tentacled monstrosity from the swamps of Dusk. Garm has Strength 40 and the thing from the swamp has Strength 33 (Unnatural (×2)). Garm rolls 20 (two degrees of success) and the thing rolls 30 (straight success), unfortunately the thing adds +2 degrees of success because of its (×2) modifier, bringing the Opposed Test to a draw. This translates to a victory to the swamp thing as it has Unnatural Strength and poor old Garm does not!</p>"
      },
      img: "icons/svg/item-bag.svg",
      type: "talent"
    };
    this.createEmbeddedDocuments("Item", [unnaturalToughnessTwo]);
  }
}