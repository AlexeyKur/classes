const arr = [
  'Bowerman',
  'Swordsman',
  'Magician',
  'Daemon',
  'Undead',
  'Zombie',
];

export default class Character {
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;

    if (this.name.length < 2) {
      throw new Error('min 2 simbol');
    }
    if (name.length > 10) {
      throw new Error('max 10 simbol!');
    }

    if (!arr.includes(type)) {
      throw new Error('Выбранный тип не существует');
    }
  }
}