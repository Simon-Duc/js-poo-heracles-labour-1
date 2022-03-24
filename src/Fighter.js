/* Fighter class definition */
const MAX_LIFE = 100;

class Fighter {
    constructor(name, strength, dexterity) {
        this.name = name;
        this.strength = strength;
        this.dexterity = dexterity;
        this.life = MAX_LIFE;
    }
    fight(fighter2) {
        // this method represents the game rules.
        const attack = Math.floor(Math.random() * this.strength);
        const defense = Math.floor(Math.random() * fighter2.dexterity);
        if (attack > defense) {
            fighter2.life -= (attack - defense);
        }
        if (fighter2.life < 0) {
            fighter2.life = 0;
        }
    }
}


module.exports = Fighter;
