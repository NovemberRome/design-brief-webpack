import makeRandom from '../utilities/makeRandom';
import adjectives from '../data/adjectives.json';
import audiences from '../data/audience.json';
import businesses from '../data/businesses.json';
import cities from '../data/cities.json';

const randomInt = (low,high) => Math.floor(low + Math.random() * (high - 1));

class Brief {
  constructor() {
    this.adjective = makeRandom(adjectives);
    this.adjectives = [];
    const numAdjectives = randomInt(2,5);
    for(let i = 0; i < numAdjectives; i++) {
      this.adjectives.push(makeRandom(adjectives));
    }
    this.audience = makeRandom(audiences);
    this.businessType = makeRandom(Object.keys(businesses));
    this.businessName = makeRandom(businesses[this.businessType]);
    this.city = makeRandom(cities).city;
  }
}

export default Brief;
/*
const audience = makeRandom(audiences);
const adjective;
const businessType;
const businessName;
const city;*/
