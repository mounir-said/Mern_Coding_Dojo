class Sensei extends Ninja {
  constructor(name) {
    super(name);
    this.health = 200;
    this.speed = 10;
    this.strength = 10;
    this.wisdom = 10;
  }

  speakWisdom() {
    super.drinkSake(); 
    console.log("What one programmer can do in one month, two programmers can do in two months.");
  }

  showStats() {
    console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}`);
  }
}

// Example usage:
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom(); 
superSensei.showStats(); 
