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