// Challenge 2
class CarCl
{
    constructor(make,speed){
        this.make=make;
        this.speed=speed;
    }
    get speedUS()
    {
         return this.speed=speed/1.6;
    }
    set speedUS(speed)
    {
        speed=speed*1.6;
        this.speed=speed;
    }

    accelerate() {
        this.speed += 10;
        console.log(`${this.make} - ${this.speed} km/h`);
      }
    
      brake() {
        this.speed -= 5;
        console.log(`${this.make} - ${this.speed} km/h`);
      }
    }
    
    // Testing the CarCl class
    const car3 = new CarCl('Ford', 120);
    car3.accelerate();       //  130 km/h
    car3.brake();            //  125 km/h
    console.log(car3.speedUS); 
    car3.speedUS = 50;      
    console.log(car3.speed);






