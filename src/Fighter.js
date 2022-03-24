/* Fighter class definition */
const MAX_LIFE = 100;

class Fighter {
    constructor(name, strength, dexterity, life) {
        this.name = name;
        this.strength = strength;
        this.dexterity = dexterity;
        this.life = MAX_LIFE;
    }
    fight(fighter1, fighter2) {
        const attack = Math.floor(Math.random() * fighter1.strength);
        const defense = Math.floor(Math.random() * fighter2.dexterity);;
        if (attack - defense <= 0) {
            return fighter2.life 
        }
        else if ((fighter2.life -= (attack - defense)) <= 0) {
            return 0;           
        }
        else {
            return fighter2.life -= (attack - defense);
        }
    }
}


module.exports = Fighter;
