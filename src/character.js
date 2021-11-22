export default class Character {
  static types() {
    return ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
  }

  constructor(name, type) {
    if ((typeof name === 'string') && (name.length >= 2 && name.length <= 10)) {
      this.name = name;
    } else throw new Error('field name must have type string & length must be from 2 to 10 character');

    if ((typeof type === 'string') && (Character.types().includes(type))) {
      this.type = type;
    } else throw new Error(`This type ${type} is wrong`);

    this.health = 100;
    this.level = 1;
  }

  levelUp() {
    if (this.health > 0) {
      this.health = 100;
      this.level += 1;
      this.attack *= 1.2;
      this.defense *= 1.2;
    } else {
      throw new Error('You are dead');
    }
  }

  damage(points) {
    if (this.health > 0) {
      this.health -= points * (1 - this.defense / 100);
    }
  }
}
