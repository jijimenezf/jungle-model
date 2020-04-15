import Animal from './Animal.mjs';

export default class Monkey extends Animal {
  constructor(specie, levelOfEnergy = 0) {
    super(specie, levelOfEnergy);
  }

  play() {
    const currentLevel = this.getLevelOfEnergy();
    if (currentLevel < 8) {
      return "I’m too tired";
    } else {
      this.updateLevelOfEnergy(currentLevel - 8);
      return 'Oooo Oooo';
    }
  }

  toString() {
    return this.getLevelOfEnergy();
  }
}
