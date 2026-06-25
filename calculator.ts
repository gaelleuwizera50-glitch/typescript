class Calculator {

    public result: number;

    constructor() {
        this.result = 7;
    }
   
    add(a: number, b: number): number {
        this.result = a + b;
        return this.result;
    }

    multiply(a: number, b: number): number {
        this.result = a * b;
        return this.result;
    }
}

// person 1
new Calculator().add(5, 10); //15

new Calculator().multiply(100, 200); //20000

new Calculator().multiply(15, 20); //300

// person 2
const calc2 =  new Calculator(); // Create another object/instance of the Calculator class
calc2.add(15, 20); //35
calc2.multiply(300, 400);//120000
calc2.multiply(100, 200); //20000


