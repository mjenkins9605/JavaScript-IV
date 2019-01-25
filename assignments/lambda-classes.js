// CODE here for your Lambda Classes

class Person {
    constructor(personAttr) {
        this.name = personAttr.name;
        this.age = personAttr.age;
        this.location = personAttr.location;
        this.gender = personAttr.gender;
    }
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}.`);
    }
}

class Instructor extends Person {
    constructor(instructorAttr) {
        super(instructorAttr);
        this.specialty = instructorAttr.specialty;
        this.favLanguage = instructorAttr.favLanguage;
        this.catchPhrase = instructorAttr.catchPhrase;

    }
    demo(subject) {
        return `Today we are learning about ${subject}.`;
    }
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}.`;
    }
}

class Student extends Person {
    constructor(studentAttr) {
        super(studentAttr);
        this.previousBackground = studentAttr.previousBackground;
        this.className = studentAttr.className;
        this.favSubjects = studentAttr.favSubjects;
    }
    listsSubjects(arr) {
        for (let i = 0; i < arr.length; i++) {
            console.log(arr[i]);
        }
    }
    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}.`;
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}.`;
    }
}

class ProjectManager extends Instructor {
    constructor(pmAttr) {
        super(pmAttr);
        this.gradeClassName = pmAttr.gradeClassName;
        this.favInstructor = pmAttr.favInstructor;
    }
    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standby times!`;
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}.`;
    }
}


const george = new Instructor({
    name: 'George',
    location: 'Orbit City',
    age: 39,
    gender: 'male',
    favLanguage: 'HTML/CSS',
    specialty: 'Front-end',
    catchPhrase: `Jane! Stop this crazy thing!`
});

const yogi = new Student({
    name: 'Yogi Bear',
    location: 'Yellowstone National Park',
    age: 5,
    gender: 'male',
    favLanguage: 'HTML/CSS',
    specialty: 'pic-a-nic baskets',
    catchPhrase: `I'm smarter than the av-er-age bear!`,
    previousBackground: 'sleep',
    className: 'FSWPT12',
    favSubjects: ['lunch', 'naps', 'lunch again']
});

const olive = new ProjectManager({
    name: 'Olive Oyl',
    location: 'Sweethaven',
    age: 33,
    gender: 'female',
    favLanguage: 'All',
    specialty: 'Redux',
    catchPhrase: `Oh dear!`,
    gradClassName: 'WEB2',
    favInstructor: 'George'
});

console.log(''); //space to break up console log to read easier

console.log(george);
george.speak();
console.log(george.name);
console.log(george.age);
console.log(george.demo("HTML and CSS"));

console.log(yogi);
yogi.speak();
console.log(yogi.listsSubjects(yogi.favSubjects));
console.log(yogi.PRAssignment("Advanced CSS"));
console.log(yogi.sprintChallenge("CSS 2"));

console.log(olive);
olive.speak();
console.log(olive.grade(yogi, 'HTML'));
console.log(olive.standUp("FSWPT5"));
console.log(olive.debugsCode(yogi, "HTML/CSS Project"));