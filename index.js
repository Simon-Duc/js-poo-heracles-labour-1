// First Labour : Heracles vs Nemean Lion
// use your Figher class here

const Fighter = require("./src/Fighter");

const heracles = new Fighter("Heracles 🧔", 20, 6);

const nemeanLion = new Fighter("Nemean Lion 🦁", 11, 13);

function thereCanBeOnlyOne(fighter1, fighter2) {
    for (let round = 1; fighter1.life > 0 && fighter2.life > 0; round++) {
        fighter1.fight(fighter2);
        fighter2.fight(fighter1);
        let roundResults = `🕛 Round #${round}
- ${fighter1.name} attacked ${fighter2.name} who has ${fighter2.life} 💙 points remaining. 
- ${fighter2.name} attacked ${fighter1.name} who has ${fighter1.life} 💙 points remaining.
`;
        console.log(roundResults);
    }
    if (fighter1.life === 0) {
        console.log(`${fighter2.name}🏆 has defeated ${fighter1.name}💀.`);
    }
    else {
        console.log(`${fighter1.name}🏆 has defeated ${fighter2.name}💀.`);
    }
}

thereCanBeOnlyOne(heracles, nemeanLion);