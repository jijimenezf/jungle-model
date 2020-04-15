import { FISH, GRAIN, MEAT, TIGER, MONKEY } from './constants.mjs';

export default class Activity {
  constructor(specie, levelOfEnergy) {
    this.specie = specie;
    this.levelOfEnergy = levelOfEnergy;
  }
    makeASound () {
      this.levelOfEnergy = this.levelOfEnergy - 3;
    }

    eatFood (food) {
      if (!food) {
        console.log(`I'm a ${this.specie} so please indicate my food`);
        return;
      }
      if (this.specie === TIGER && food === GRAIN) {
        console.log("I can’t it that");
        return;
      } else {
        this.levelOfEnergy = this.levelOfEnergy + 5;
      }
    }

    sleep () {
      this.levelOfEnergy = this.levelOfEnergy + 10;
    }

    getLevelOfEnergy() {
      return this.levelOfEnergy;
    }

    updateLevelOfEnergy(value) {
      this.levelOfEnergy = value;
    }
}
