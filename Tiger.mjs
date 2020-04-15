import Animal from './Animal.mjs';

export default class Tiger extends Animal {
  constructor(specie, levelOfEnergy = 0) {
    super(specie, levelOfEnergy);
  }

  toString() {
    return this.getLevelOfEnergy();
  }
}
