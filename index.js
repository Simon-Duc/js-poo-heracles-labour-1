// First Labour : Heracles vs Nemean Lion
// use your Figher class here

const fighterClass = require("./src/Fighter");

const heracles = new fighterClass("Heracles", 20, 6);

const nemeanLion = new fighterClass("Nemean Lion", 11, 13);

function thereCanBeOnlyOne(fighter1, fighter2) {
    for (let round = 1; fighter1.life > 0 && fighter2.life > 0; round++) {
        let fighter1Attack = fighter1.fight(fighter1, fighter2);
        let fighter2Attack = fighter2.fight(fighter2, fighter1);
        let roundResults = `After round ${round}, ${fighter1.name} attacked ${fighter2.name} who has ${fighter2.life} life points remaining. Then ${fighter2.name} attacked ${fighter1.name} who has ${fighter1.life} life points remaining.`;
        console.log(roundResults);
    }
    if (fighter1.life === 0) {
        console.log(`${fighter2.name} has defeated ${fighter1.name}`);
    }
    else {
        console.log(`${fighter1.name} has defeated ${fighter2.name}`);
    }
}

thereCanBeOnlyOne(heracles, nemeanLion);