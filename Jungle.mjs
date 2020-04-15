import { TIGER, MONKEY, FISH } from './constants.mjs';

export default class Jungle {
  constructor (animals) {
    this.animals = animals;
  }

  performSoundOff () {
    this.animals.forEach((animal) => {
      animal.activity.makeASound();
      console.log(`${animal.specie} has a level of ${animal.toString()}`);
    })
  }

  randomNumber (min, max) {
	  return Math.floor(Math.random() * (max - min + 1) + min);
  }

  performRandomActivity () {
    this.animals.forEach((animal) => {
      const rand = this.randomNumber(0, 2);
      switch(rand) {
        case 0:
          animal.activity.makeASound();
          break;
        case 1:
          animal.activity.eatFood(FISH);
          break;
        case 2:
          if (animal.specie === MONKEY) {
            animal.play();
          }
          break;
        default:
          animal.activity.sleep();
          break;
      }
    })
  }
}
