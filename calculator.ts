


class student {
    private name: string;
    private age: number;
    private marks: string;

    constructor(n: string, a: number, m: string) {
        this.name = n;
        this.age = a;
        this.marks = m;
    }

    display(): void {
        const result = this.age > 18 ? "Adult" : "Minor";
        console.log(`Name: ${this.name}, Age: ${this.age}, Marks: ${this.marks}, Status: ${result}`);
    }

    getGrade(): string {
        if (this.marks === "A") {
            return "Excellent";
        } else if (this.marks === "B") {
            return "Good";
        } else if (this.marks === "C") {
            return "Average";
        } else {
            return "Needs Improvement";
        }
    }

    // many methods can be defined in a class, here is another example of a method

    method1(): void {
        console.log(`Name: ${this.name}, Age: ${this.age}, Marks: ${this.marks}`);
    }
}

const student1 = new student("Gaelle", 20, "F");
student1.display(); // Name: Gaelle, Age: 20, Marks: F, Status: Adult
student1.getGrade(); 

// console.log(`Name: ${student1.name}, Age: ${student1.age}, Marks: ${student1.getGrade()}, Status: ${student1.age > 18 ? "Adult" : "Minor"}`); // Name: Gaelle, Age: 20, Marks: Needs Improvement, Status: Adult








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


