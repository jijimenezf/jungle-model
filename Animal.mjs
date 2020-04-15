import Activity from './Activity.mjs';

export default class Animal {
  constructor(specie, levelOfEnergy = 0) {
    this.specie = specie;
    this.levelOfEnergy = levelOfEnergy;
    this.activity = new Activity(specie, levelOfEnergy);
  }

  getLevelOfEnergy () {
    return this.activity.getLevelOfEnergy();
  }

  updateLevelOfEnergy(value) {
    this.activity.updateLevelOfEnergy(value);
  }
}
