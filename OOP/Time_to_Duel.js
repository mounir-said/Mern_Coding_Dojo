class Unit {
  constructor(name, cost, power, resilience) {
    this.name = name;
    this.cost = cost;
    this.power = power;
    this.resilience = resilience;
  }

  attack(target) {
    target.resilience -= this.power;
    console.log(`${this.name} attacks ${target.name} for ${this.power} damage.`);
    console.log(`${target.name}'s resilience: ${target.resilience}`);
  }
}

class Effect {
  constructor(name, cost, text, stat, magnitude) {
    this.name = name;
    this.cost = cost;
    this.text = text;
    this.stat = stat;
    this.magnitude = magnitude;
  }

  apply(target) {
    if (this.stat === "resilience") {
      target.resilience += this.magnitude;
      console.log(`${this.text} applied to ${target.name}.`);
      console.log(`${target.name}'s resilience: ${target.resilience}`);
    } else if (this.stat === "power") {
      target.power += this.magnitude;
      console.log(`${this.text} applied to ${target.name}.`);
      console.log(`${target.name}'s power: ${target.power}`);
    }
  }
}

// Play out the scenario
const redBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4);
const blackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4);
const hardAlgorithm = new Effect("Hard Algorithm", 2, "Increase target's resilience by 3", "resilience", 3);
const unhandledPromiseRejection = new Effect("Unhandled Promise Rejection", 1, "Reduce target's resilience by 2", "resilience", -2);
const pairProgramming = new Effect("Pair Programming", 3, "Increase target's power by 2", "power", 2);

console.log("Turn 1:");
hardAlgorithm.apply(redBeltNinja);

console.log("\nTurn 2:");
unhandledPromiseRejection.apply(redBeltNinja);


console.log("\nTurn 3:");
pairProgramming.apply(redBeltNinja);
redBeltNinja.attack(blackBeltNinja);
