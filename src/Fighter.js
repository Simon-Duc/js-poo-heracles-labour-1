/* Fighter class definition */
const MAX_LIFE = 100;

class Fighter {
    constructor(name, strength, dexterity) {
        this.name = name;
        this.strength = strength;
        this.dexterity = dexterity;
        this.life = MAX_LIFE;
    }
    fight(opponent) {
        // this method represents the game rules.
        const attack = Math.floor(Math.random() * this.strength);
        const defense = Math.floor(Math.random() * opponent.dexterity);
        if (attack > defense) {
            opponent.life -= (attack - defense);
        }
        if (opponent.life < 0) {
            opponent.life = 0;
        }
    }
}

module.exports = Fighter;
