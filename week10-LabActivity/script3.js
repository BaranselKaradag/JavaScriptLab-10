// Challenge 3
class EV extends Car {
    constructor(make, speed, charge) {
      super(make, speed);
      this.charge = charge;
    }
  
    chargeBattery(chargeTo) {
      this.charge = chargeTo;
      console.log(`${this.make} battery charge = ${this.charge}%`);
    }
  
    accelerate() {
      this.speed += 20;
      this.charge--;
      console.log(`${this.make}  ${this.speed} km/h, charge of ${this.charge}%`);
    }
  }
  
  // Testing the EV class
  const tesla = new EV('Tesla', 120, 100);
  tesla.accelerate();          // Tesla  140 km/h,charge of 99%
  tesla.brake();               // Tesla  135 km/h
  tesla.chargeBattery(90);     // Tesla battery charge = 90%
  tesla.accelerate(); 