import Tiger from './Tiger.mjs';
import Monkey from './Monkey.mjs';
import Jungle from './Jungle.mjs';
import { FISH, GRAIN, MEAT, TIGER, MONKEY } from './constants.mjs';

const monkey = new Monkey(MONKEY, 0);
const tiger = new Tiger(TIGER, 0);
const animals = [monkey, tiger];

const theJungle = new Jungle(animals);

monkey.activity.makeASound();
monkey.activity.sleep();
monkey.activity.eatFood();
monkey.activity.eatFood(FISH);
monkey.play();


tiger.activity.makeASound();
tiger.activity.sleep();
tiger.activity.eatFood();
tiger.activity.eatFood(GRAIN);
tiger.activity.eatFood(MEAT);

theJungle.performSoundOff();
theJungle.performRandomActivity();
theJungle.performSoundOff();
